// src/App.tsx
import { useState } from "react";

export function App() {
  // 1. 文字列を管理するState
  const [inputText, setInputText] = useState<string>("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React イベントとフォームの学習</h1>
      {/* 2. 入力欄を設置 */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="ここに入力してください"
          value={inputText} // 👈 入力欄の値をStateと連動させる
          onChange={(e) => setInputText(e.target.value)} // 👈 文字が変わるたびにStateを更新する
          style={{ padding: "8px", fontSize: "16px", width: "250px" }}
        />
      </div>
      {/* 3. Stateの値をリアルタイムに画面に表示 */}
      <p style={{ fontSize: "20px" }}>
        あなたが入力した文字: <span style={{ color: "blue", fontWeight: "bold" }}>{inputText}</span>
      </p>
      //演習課題
      <p style={{ fontSize: "20px" }}>
        現在の文字数: <span style={{ color: "red" }}>{inputText.length}</span> 文字
      </p>
    </div>
  );
}

export default App;
