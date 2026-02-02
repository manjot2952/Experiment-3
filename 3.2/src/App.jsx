import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <h1>Profile Page</h1>

      <img src="pp.png" alt="Profile" />
      <h2>Manjot Singh</h2>
      <h2>UID-23BAI70633</h2>

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
        <li>Hackathon winner</li>
      </ol>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      {/* 🔹 Top Header */}
      <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h2>My Profile</h2>
        </Link>
      </header>

      {/* 🔹 Buttons below header, top-right */}
      <div style={{ textAlign: "right", padding: "10px" }}>
        <Link to="/">
          <button style={{ marginRight: "10px" }}>Profile</button>
        </Link>

        <Link to="/about">
          <button>Dashboard</button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
