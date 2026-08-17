'use client';

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isCalling, setIsCalling] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: '自分', text: input }]);
    setInput('');
  };

  return (
    <main className="flex flex-col h-screen bg-gray-950 text-white p-4 font-sans">
      <header className="flex justify-between items-center border-b border-gray-800 pb-3 mb-4">
        <div>
          <h1 className="text-lg font-bold tracking-wider">Jifleaf</h1>
          <p className="text-xs text-gray-400">{isCalling ? '🟢 通話中' : '⚪ 待機中'}</p>
        </div>
        <button
          onClick={() => setIsCalling(!isCalling)}
          className={`px-5 py-2 rounded-full font-bold text-sm ${isCalling ? 'bg-red-600' : 'bg-emerald-600'}`}
        >
          {isCalling ? '終了' : '通話'}
        </button>
      </header>
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="p-3 bg-gray-800 rounded-2xl ml-auto text-sm">{msg.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white"
          placeholder="メッセージを入力..."
        />
        <button onClick={handleSend} className="bg-blue-600 px-5 rounded-xl font-bold text-sm">送信</button>
      </div>
    </main>
  );
}
