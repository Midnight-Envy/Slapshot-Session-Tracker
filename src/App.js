import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UploadForm from "./components/UploadForm";
import SessionList from "./components/SessionList";
import PlayerList from "./components/PlayerList";
import "./index.css";

function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/sessions" element={<SessionList />} />
          <Route path="/players" element={<PlayerList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;