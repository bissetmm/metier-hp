# Metier HP

株式会社メティエのコーポレート／ポートフォリオサイトです。  
HTML・CSS・JavaScript の静的サイトとして構成され、[Firebase Hosting](https://firebase.google.com/docs/hosting) で公開しています。

## 技術構成

- 静的サイト（ビルド不要）
- Firebase Hosting（プロジェクト: `metier-profiles`）
- フォント: Google Fonts（EB Garamond, Noto Sans JP, Poppins）

## ディレクトリ構成

```
metier-hp/
├── public/              # 公開ディレクトリ（Firebase Hosting のルート）
│   ├── index.html       # トップページ
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js          # 共通 UI（メニュー、スクロール等）
│   │   ├── works-data.js    # 実績データ
│   │   └── works-modal.js   # 実績モーダル
│   └── assets/          # 画像・ロゴ・ファビコン
├── firebase.json        # Firebase Hosting 設定
├── .firebaserc          # Firebase プロジェクト ID
└── .gitignore
```

## 前提条件

- [Node.js](https://nodejs.org/)（Firebase CLI 実行用）
- [Firebase CLI](https://firebase.google.com/docs/cli)
- Firebase プロジェクト `metier-profiles` へのデプロイ権限

## セットアップ

リポジトリを clone した後、Firebase CLI をインストールします。

```bash
git clone https://github.com/bissetmm/metier-hp.git
cd metier-hp
npm install -g firebase-tools
```

Firebase にログインします（初回のみ）。

```bash
firebase login
```

グローバルインストールを避ける場合は、以降の `firebase` コマンドを `npx firebase-tools` に置き換えてください。

## ローカルでの確認

公開ディレクトリ `public/` を Firebase CLI でプレビューできます。

```bash
firebase serve
```

ブラウザで `http://localhost:5000` を開いて表示を確認します。

## Firebase へのデプロイ

### 1. プロジェクトの確認

`.firebaserc` にデフォルトプロジェクトが設定されています。

```json
{
  "projects": {
    "default": "metier-profiles"
  }
}
```

別プロジェクトへデプロイする場合は、次のコマンドで切り替えます。

```bash
firebase use <project-id>
```

### 2. デプロイ実行

```bash
firebase deploy --only hosting
```

成功すると、Hosting URL（例: `https://metier-profiles.web.app`）がターミナルに表示されます。

### 3. プレビューチャンネル（任意）

本番反映前に一時 URL で確認する場合:

```bash
firebase hosting:channel:deploy preview
```

## 設定メモ

| ファイル | 内容 |
|----------|------|
| `firebase.json` | 公開ディレクトリ `public`、キャッシュヘッダー（JS/CSS/SVG: 1 時間） |
| `.firebaserc` | デプロイ先 Firebase プロジェクト ID |
| `.gitignore` | `.firebase/`、`node_modules/`、個人書類など |

## 注意事項

- このリポジトリに npm の `package.json` はありません。依存関係のインストールは不要です。
- 職務経歴書など個人関連ファイルは `.gitignore` で除外しています。リポジトリに含めないでください。
