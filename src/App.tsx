import AudioRecord from "./ReadAudio/ReadAudio";
import Navbar from "./Navbar/Navbar";
export default function App() {
  return (
    <div>
      <Navbar />;
      <AudioRecord />;{/* <Translate />; */}
    </div>
  );
}
