import * as React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useState } from "react";
import Translate from "../Translate/Translate";
// Blob is short for “Binary Large Object.”
//” This data type holds multimedia objects like images and videos, GIFs, and audio. It stores binary data as a single entity.

// ... (other imports)

export default function ReadAudio() {
  const recorderControls = useAudioRecorder();
  const [state, setState] = useState(false); // Renamed setstate to setState for consistency
  const [status, setStatus] = useState("");
  const [records, updateRecords] = useState([]);

  const sendAudioToServer = async (blob: Blob) => {
    try {
      const formData = new FormData();
      formData.append("file_upload", blob, "recordedAudio.wav");

      const endpoint = "http://localhost:5049/uploadfile/";

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Audio sent to server successfully!");
        setStatus("Status: Audio sent successfully!");
        setState(true);
      } else {
        console.error("Failed to send audio to server");
        setStatus("Status: Failed to send audio to server!");
        setState(false);
      }
    } catch (error) {
      console.error("Error sending audio to server:", error);
      setStatus("Status: Failed to send audio to server!");
      setState(false);
    }
  };

  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    // Create a container div to center the audio element
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.appendChild(audio);

    // Append the container to the body
    document.body.appendChild(container);

    sendAudioToServer(blob);
  };

  return (
    <div>
      <div
        style={{
          maxWidth: 400,
          margin: "auto",
          padding: 20,
          backgroundColor: "#f0f0f0",
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
          downloadFileExtension="wav"
          downloadOnSavePress={false}
          showVisualizer={true}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <button
            style={{
              padding: 10,
              fontSize: 16,
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={recorderControls.startRecording}
          >
            Start Recording
          </button>
          <button
            style={{
              padding: 10,
              fontSize: 16,
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={recorderControls.stopRecording}
          >
            Stop Recording
          </button>
        </div>
        <p style={{ marginTop: 10, fontSize: 16 }}>
          {recorderControls.isRecording ? "Recording..." : ""}
        </p>
        <h1 style={{ marginTop: 20, fontSize: 24, color: "#333" }}>{status}</h1>
      </div>
      {state && <Translate />}
    </div>
  );
}
