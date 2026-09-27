// src/components/ProfileCard.tsx

// 🌟 1. 作成したCSSファイルを「styles」という名前の箱（オブジェクト）としてインポートする
import styles from "./ProfileCard.module.css";

export function ProfileCard() {
  // 🌟 2. class="card" ではなく、className={styles.card} のように指定する
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>React 太郎</h2>
      <p className={styles.description}>フロントエンドエンジニア修行中！</p>
    </div>
  );
}
