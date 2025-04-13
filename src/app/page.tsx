"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const wakePC = async () => {
    setLoading(true);
    setMessage("送信中...");

    try {
      const res = await fetch("/api/wake", {
        method: "POST",
      });

      const data = await res.json();
      setMessage(data.message || "起動リクエストを送信しました！");
    } catch (err) {
      console.error("送信失敗:", err);
      setMessage("ESP32に接続できませんでした。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🏠 PC Wake-on-LAN</h1>
      <button
        onClick={wakePC}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? "送信中..." : "PCを起動する"}
      </button>
      <p className="mt-4 text-gray-700">{message}</p>
    </main>
  );
}
