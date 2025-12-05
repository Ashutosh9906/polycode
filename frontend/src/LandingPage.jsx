import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (!username || !roomId) {
      alert("Please enter both username and room ID");
      return;
    }
    localStorage.setItem("username", username);
    navigate(`/room/${roomId}`);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "220vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1c1c2e, #2c2c3e)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "2.5rem",
          borderRadius: "16px",
          backgroundColor: "#2b2b3c",
          boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
          transition: "all 0.3s ease",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#f0f0f0", marginBottom: "1rem" }}>
          Join a Collaborative Room
        </h2>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            backgroundColor: "#3b3b55",
            color: "#f0f0f0",
            fontSize: "1rem",
            transition: "box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #7b61ff")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />

        <input
          type="text"
          placeholder="Enter room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            backgroundColor: "#3b3b55",
            color: "#f0f0f0",
            fontSize: "1rem",
            transition: "box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #7b61ff")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />

        <button
          onClick={handleJoin}
          style={{
            padding: "0.85rem",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(90deg, #7b61ff, #644adf)",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Join Room
        </button>

        <p style={{ fontSize: "0.85rem", textAlign: "center", color: "#aaa" }}>
          Enter your username and room ID to start coding together
        </p>
      </div>
    </div>
  );
}
