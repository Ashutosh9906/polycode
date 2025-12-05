import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from "@monaco-editor/react"
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"

function App({ roomId, username }) {
  const editorRef = useRef(null);
  const [users, setUsers] = useState([]);

  function handleEditToDidMount(editor, monaco) {
    editorRef.current = editor;
    const doc = new Y.Doc();
    const provider = new WebrtcProvider(roomId, doc);
    const type = doc.getText("monaco");

    new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    );

    console.log(`${username} joined room: ${roomId}`);

    // Track connected users
    provider.awareness.setLocalStateField("user", { name: username });

    provider.awareness.on("update", () => {
      const states = Array.from(provider.awareness.getStates().values());
      const names = states.map((s) => s.user?.name).filter(Boolean);
      setUsers(names);
    });
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        background: "linear-gradient(135deg, #1c1c2e, #2c2c3e)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >

      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#2b2b3c",
          padding: "1.5rem",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "4px 0 20px rgba(0,0,0,0.4)",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "#ccc" }}>
          👥 In Room: {roomId}
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginTop: "1rem"
          }}
        >
          {users.length === 0 && (
            <p style={{ fontSize: "0.9rem", color: "#999" }}>
              No users yet...
            </p>
          )}

          {users.map((u, i) => (
            <div
              key={i}
              style={{
                padding: "0.7rem",
                borderRadius: "10px",
                backgroundColor: "#3b3b55",
                color: "#fff",
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem"
              }}
            >
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#7b61ff"
                }}
              ></div>
              {u}
            </div>
          ))}
        </div>
      </div>

      {/* EDITOR */}
      <div style={{ flex: 1 }}>
        <Editor
          height="100vh"
          width="100%"
          theme="vs-dark"
          onMount={handleEditToDidMount}
        />
      </div>
    </div>
  );
}

export default App;
