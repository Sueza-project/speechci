import * as React from "react";
import "@mantine/core/styles.css";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import AudioRecord from "./ReadAudio/ReadAudio";
import Navbar from "./Navbar/Navbar";
import Translate from "./Translate/Translate";
export default function App() {
  return (
    <div>
      <Navbar />;
      <AudioRecord />;{/* <Translate />; */}
    </div>
  );
}
