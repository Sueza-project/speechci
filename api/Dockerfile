# FROM nvidia/cuda:11.0.3-base-ubuntu20.04
FROM python:3.10-bullseye

EXPOSE 5000
# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# # Set environment variables
# ENV DEBIAN_FRONTEND=noninteractive

# # Install system dependencies
# RUN apt-get update && \
#     apt-get install -y \
#     git \
#     python3-pip \
#     python3-dev \
#     python3-opencv \
#     libglib2.0-0
# # Install any python packages you need
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r requirements.txt


# # Install PyTorch and torchvision
# RUN pip3 install torch torchvision torchaudio -f https://download.pytorch.org/whl/cu111/torch_stable.html

# Set the working directory
WORKDIR /app

COPY dataset .
COPY tempAudio .
COPY main.py main
# EXPOSE 5049


# Set the entrypoint
ENTRYPOINT [ "python3" ]


# CMD ["python3", "main.py"]