import { useParams } from "react-router-dom";
import App from "./App";

export default function RoomPage() {
  const { roomId } = useParams();

  // Optional: get username
  const username = localStorage.getItem("username") || "Anonymous";

  return <App roomId={roomId} username={username} />;
}
