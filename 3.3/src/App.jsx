import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <h1>Profile Page</h1>

      <img src="pp.png" alt="Profile" width="180" />
      <h2>Manjot Singh</h2>
      <h3>UID-23BAI70633</h3>

      <h2>Projects</h2>
      <ol>
        <li>AI TOOLKIT</li>
        <li>ZYRA ALT ASSISTANT</li>
      </ol>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <h2>Skills</h2>
      <ol>
        <li>C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>MERN Stack</li>
      </ol>

      <h2>Achievements</h2>
      <ol>
        <li>Hackathon Winner</li>
      </ol>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <h2>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          My Profile
        </Link>
      </h2>

      {/* LEFT BUTTONS */}
      <Link to="/" style={{ marginRight: "10px" }}>Profile</Link>
      <Link to="/about">Dashboard</Link>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
