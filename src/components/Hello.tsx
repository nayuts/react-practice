// src/components/Hello.tsx

// 🌟 1. 受け取るデータ（Props）の「型（設計図）」を定義します
type HelloProps = {
  name: string; // nameという名前の文字列を受け取るよ、という宣言
  age: number;
};

// 🌟 2. 関数の引数として { name } を受け取ります
export function Hello({ name, age }: HelloProps) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      {/* 🌟 3. 受け取った name を画面に表示します */}
      {/* Reactでは、変数を中括弧 { } で囲むと画面に出力できます！ */}
      <h2>こんにちは、{name}さん！</h2>
      <p>年齢は {age} 歳です。</p>
      <p>これは私が初めて作ったReactコンポーネントです。</p>
    </div>
  );
}
