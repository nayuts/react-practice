// src/App.tsx
import { useState } from "react";

export function App() {
  // 1. Stateの宣言
  const [count, setCount] = useState<number>(0);

  // 2. ボタンが押された時の処理（関数）
  const handleIncrement = () => {
    setCount(count + 1); // 専用の更新関数を使って、いまのカウントに1を足す
  };
  //演習課題
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Stateの学習</h1>
      {/* 3. Stateの値を画面に表示（Propsと同じように { } を使います） */}
      <p style={{ fontSize: "24px" }}>現在のカウント: {count}</p>
      {/* 4. ボタンを押したら handleIncrement を実行する */}
      <button onClick={handleIncrement}>カウントアップ</button>
      //演習課題
      <button onClick={handleDecrement}>カウントダウン</button>
    </div>
  );
}

export default App;
