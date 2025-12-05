import * as Y from "https://esm.run/yjs";
import { WebsocketProvider } from "https://esm.run/y-websocket";

const doc = new Y.Doc();

const provider = new WebsocketProvider("ws://localhost:4444", "my-room", doc);

const ytext = doc.getText("shared-text");

const textarea = document.getElementById("editor");

ytext.observe(() => {
  textarea.value = ytext.toString();
});

textarea.addEventListener("input", () => {
  ytext.delete(0, ytext.length);
  ytext.insert(0, textarea.value);
});
