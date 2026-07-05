/**
 * Labs — テスト・学習用デモ
 * デモURL・GitHub・解説記事（note / Hatena）を links に追加してください
 */
const LABS_DATA = [
  {
    id: "line-rich-menu-gui",
    tag: "LINE / GUI",
    year: "2026",
    title: "リッチメニュー作成GUI",
    desc: "LINE リッチメニューのレイアウトをドラッグ&ドロップで組み立てるフロントエンドデモ。フォーム入力とプレビューを一体で扱う GUI として作成。",
    tech: ["React", "TypeScript", "dnd-kit", "React Hook Form", "Zod", "Vite"],
    highlights:
      "dnd-kit によるセル配置、Zod スキーマ連携、React Hook Form によるフォーム状態管理",
    links: {
      demo: null,
      github: null,
      note: null,
      hatena: null,
    },
  },
  {
    id: "kanban-board-ui",
    tag: "UI / dnd-kit",
    year: "2026",
    title: "カンバンボード UI",
    desc: "列の追加・カードのドラッグ&ドロップ・並び替えを試すフロントエンドデモ。リスト間移動と列内ソートの挙動を検証するための UI プロトタイプ。",
    tech: ["React", "TypeScript", "dnd-kit", "Vite"],
    highlights:
      "DndContext / SortableContext による列・カードの双方向 D&D、キーボード操作の検討",
    links: {
      demo: null,
      github: null,
      note: null,
      hatena: null,
    },
  },
  {
    id: "multi-step-form-wizard",
    tag: "Form / Validation",
    year: "2026",
    title: "多段階フォームウィザード",
    desc: "入力 → 確認 → 完了の 3 ステップ構成で、各段階のバリデーションと状態を扱うフォームデモ。ステップ間の値引き継ぎとエラー表示を検証。",
    tech: ["React", "TypeScript", "React Hook Form", "Zod", "Vite"],
    highlights:
      "Zod スキーマをステップ単位で分割、未入力ステップへの遷移制御、確認画面での read-only 表示",
    links: {
      demo: null,
      github: null,
      note: null,
      hatena: null,
    },
  },
  {
    id: "mock-api-dashboard",
    tag: "Data / Chart",
    year: "2026",
    title: "モック API ダッシュボード",
    desc: "固定 JSON をデータソースに、KPI カード・折れ線グラフ・フィルタ付き一覧を表示するダッシュボードデモ。API なしでフロントエンド単体の UI を試す。",
    tech: ["React", "TypeScript", "TanStack Query", "Recharts", "Vite"],
    highlights:
      "モックデータによる非同期取得の再現、期間フィルタとチャート連動、レスポンシブなグリッドレイアウト",
    links: {
      demo: null,
      github: null,
      note: null,
      hatena: null,
    },
  },
];
