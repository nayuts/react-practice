// src/App.tsx
import { useState, useEffect } from "react";

export function App() {
  // 1. 取得したデータを保存するためのState
  const [todoTitle, setTodoTitle] = useState<string>("まだデータがありません");
  const [isLoading, setIsLoding] = useState<boolean>(true);

  // 2. useEffectを使って「画面が開いた瞬間に1回だけ」処理をする
  useEffect(() => {
    // 🌟 ルール：useEffectの中で async 関数を新しく作る
    const fetchTodo = async () => {
      // APIからデータを取得してくるまで「待つ (await)」
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();

      // データが取れたら、Stateを上書きする
      setTodoTitle(data.title);

      setIsLoding(false);
    };

    // 🌟 作った関数をすぐに呼び出す
    fetchTodo();
  }, []); // 👈 【超重要】この「空の配列」が1回だけ動かすための魔法です！

  return (
    <div style={{ padding: "20px" }}>
      <h1>React useEffectの学習</h1>

      <h2>取得したTodo：</h2>
      <p style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>
        {isLoading ? "⏳ 読み込み中..." : todoTitle}
      </p>
    </div>
  );
}

export default App;
