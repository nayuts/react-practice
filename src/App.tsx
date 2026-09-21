// src/App.tsx

export function App() {
  const tasks = [
    { id: 1, title: "Reactの復習をする", isDone: true },
    { id: 2, title: "牛乳を買う", isDone: false },
    { id: 3, title: "部屋の掃除", isDone: false },
    { id: 4, title: "家賃の振り込み", isDone: false, isImportant: true },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React 繰り返しと条件分岐の学習</h1>

      <h2>今日のタスク一覧</h2>
      {/* 🌟 2. mapを使って、配列の要素を1つずつ <li> タグに変換する */}
      <ul>
        {tasks.map((task) => {
          return (
            // 要素を並べるときは、一番外側のタグに「key」が絶対必要！
            <li key={task.id} style={{ fontSize: "18px", marginBottom: "8px" }}>
              {task.title} {task.isImportant && "⭐️"}
              {/* isDone が true なら「✅ 完了」、false なら「🏃‍♂️ 未完了」を表示 */}
              <span style={{ marginLeft: "10px" }}>{task.isDone ? "✅ 完了" : "🏃‍♂️ 未完了"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
