import * as React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useState } from "react";

// Blob is short for “Binary Large Object.”
//” This data type holds multimedia objects like images and videos, GIFs, and audio. It stores binary data as a single entity.

export default function ReadAudio() {
  const recorderControls = useAudioRecorder();
  // const [records, updateRecords] = useState([]);

  const sendAudioToServer = async (blob: Blob) => {
    try {
      const formData = new FormData();
      formData.append("audioFile", blob, "recordedAudio.wav");

      const response = await fetch("your-server-endpoint", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Audio sent to server successfully!");
      } else {
        console.error("Failed to send audio to server");
      }
    } catch (error) {
      console.error("Error sending audio to server:", error);
    }
  };

  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    sendAudioToServer(blob);
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        downloadFileExtension="wav"
        downloadOnSavePress={true}
      />
      <button onClick={recorderControls.startRecording}>Start Recording</button>
      <button onClick={recorderControls.stopRecording}>Stop recording</button>

      <p>{recorderControls.isRecording ? "Recording..." : ""}</p>
    </div>
  );
}
