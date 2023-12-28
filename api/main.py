from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

from datasets import load_dataset

from typing import Union
from pydantic import BaseModel
import uvicorn
import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset, Audio
model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")




class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None




UPLOAD_DIR = Path() / 'dataset'

app = FastAPI()
origins = "http://10.11.12.230:3000/"
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['GET'],
    allow_headers=['Content-Type','application/xml']
)

filename = "init"

@app.post('/uploadfile/')
async def create_upload_file(file_upload: UploadFile):

    data = await file_upload.read()
    save_to = UPLOAD_DIR / file_upload.filename
    filename= file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    return { "filenames": file_upload.filename}

@app.post("/items/")
async def create_item(item: Item):
    return item

@app.get("/")
async def translate_():
    dataset = load_dataset("audiofolder", data_dir="dataset/data/", drop_metadata=True)
    dataset['train']['audio']
    ds= dataset.cast_column("audio", Audio(sampling_rate=16_000))['train']['audio']
    inputs = processor(ds[0]["array"], sampling_rate=ds[0]["sampling_rate"], return_tensors="pt")

    generated_ids = model.generate(
        inputs["input_features"],
        attention_mask=inputs["attention_mask"],
        forced_bos_token_id=processor.tokenizer.lang_code_to_id["fr"],
    )
    translation = processor.batch_decode(generated_ids, skip_special_tokens=True)

    return {"message": translation[0]}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5049)