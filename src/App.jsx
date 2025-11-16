import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! Ask me anything about centrifugal pumps." }
  ]);

  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    // Add user's message
    setMessages([...messages, { role: "user", text: input }]);

    // Add simple mock bot response (no API)
    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "assistant",
        text:
          "This is a demo answer. In real version, I will search internal/external/EAM knowledge bases."
      }
    ]);

    setInput("");
  }

  return (
    <div className="flex h-screen bg-purple-900 text-white">
      
      {/* LEFT SIDEBAR */}
      <div className="w-20 bg-purple-800 flex flex-col items-center py-6 space-y-10">
        <button className="hover:bg-purple-700 p-3 rounded-xl">⟵</button>
        <button className="bg-purple-700 hover:bg-purple-600 px-3 py-2 rounded">New</button>
        <button className="bg-purple-700 hover:bg-purple-600 px-3 py-2 rounded">Chats</button>
        <button className="bg-purple-700 hover:bg-purple-600 px-3 py-2 rounded">Abc</button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 flex flex-col">
        {/* HEADER */}
        <h1 className="text-2xl font-semibold mb-4">
          Virtual Expert Demo
        </h1>

        {/* TABS */}
        <div className="flex gap-4 mb-4">
          <button className="px-4 py-2 rounded-full bg-purple-600">Internal Knowledge</button>
          <button className="px-4 py-2 rounded-full bg-purple-700">External Knowledge</button>
          <button className="px-4 py-2 rounded-full bg-purple-700">EAM Database</button>
        </div>

        {/* CHAT WINDOW */}
        <div className="flex-1 overflow-y-auto bg-purple-800 rounded-xl p-4 space-y-4 border border-purple-700">
          {messages.map((m, index) => (
            <div key={index} className={m.role === "user" ? "text-right" : ""}>
              <div
                className={
                  m.role === "user"
                    ? "inline-block bg-purple-600 px-4 py-2 rounded-full"
                    : "bg-purple-900 p-4 rounded-lg max-w-xl"
                }
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT BOX */}
        <div className="mt-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-purple-700 rounded-full outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-purple-600 px-6 py-3 rounded-full"
          >
            ➤
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-64 bg-purple-950 p-4 border-l border-purple-700">
        <h3 className="text-lg font-semibold mb-3">Source Citations</h3>

        <div className="space-y-4">
          <div className="bg-purple-800 p-3 rounded">
            <div className="h-24 bg-purple-600 rounded mb-2"></div>
            <p className="font-semibold text-sm">Manual: Pump Troubleshooting</p>
            <p className="text-xs text-purple-300">p. 23</p>
          </div>

          <div className="bg-purple-800 p-3 rounded">
            <div className="h-24 bg-purple-600 rounded mb-2"></div>
            <p className="font-semibold text-sm">FMEA Analysis Report</p>
            <p className="text-xs text-purple-300">Excel Sheet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
