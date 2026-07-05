/**
 * 主な実績 — 詳細データ
 * 職務経歴書の「詳細」「使用言語／ツール」「チーム人数」に対応
 * 未登録の id には詳細ボタンを表示しません
 */
const WORKS_DATA = {
  cpm: {
    title: "クラウド型経営管理SaaS（CPM）アーキテクチャ検討支援",
    detail: `企業向けクラウド型経営管理システム（CPM）の新規開発プロジェクトへ参画。React + C# (.NET Core) + SQL Server + Azure をベースとしたマルチテナントSaaSの設計検討・技術調査・ドキュメント作成を担当。

Microsoft Entra ID（Azure AD）を利用した認証認可方式、BIツール連携、データアクセス制御（RLS）、多言語対応など、システム横断の技術課題について調査・比較検討を実施。次世代システム構想における基本設計・アーキテクチャ検討を支援。

・認証認可・アクセス制御方式検討（Entra ID、RBAC / ACL / RLS、マルチテナント環境のデータアクセス制御、BIツールとの権限制御連携）
・BI・分析基盤設計支援（QuickSight、RLS適用方式、DR・バックアップ、Asset Bundle を利用した移行・復旧手順）
・システムアーキテクチャ・方式設計（多言語対応、Portal / LN 間の責務分離、BFF / API / SPA 構成、draw.io・Mermaid による図作成）
・UI/UX・画面設計（LN向け画面構成、ワイヤーフレーム、権限設計を考慮した画面遷移整理）`,
    tools: `バックエンド：C# (.NET Core) / SQL Server
フロントエンド：React / TypeScript
BI：Amazon QuickSight
認証認可：Microsoft Entra ID / OAuth2.0 / OpenID Connect
プラットフォーム：Azure
その他：draw.io / Mermaid / Confluence / Teams / Git`,
    team: "PM・アーキテクト・業務担当・開発担当含め約10〜15名規模",
  },

  "edtech-flashcard-v2": {
    title: "小中学生向けフラッシュカード学習 Web アプリ v2 刷新",
    detail: `小中学生向けオンライン学習サービスの v2 刷新プロジェクト（2026年1月）。教科・単元・ジャンル単位でフラッシュカード（デッキ）を選び学習できるほか、対戦モード・ジャーニー（ゲーミフィケーション）・自作デッキ・学習統計などの機能を備えた多機能 SPA を Angular 20 Zoneless アーキテクチャで再構築。GCP App Engine 上で dev / stg / prod 環境を運用。

モノレポ構成で、学生向けアプリ（default）、管理画面（admin）、Go バックエンド API（server）の3層。対象は小学校（ES）、中学校理科（JH-SCI）、中学校社会（JH-SOC）のかんたんモード / フルモード。

・Angular 20（Zoneless / Signals）による学生向け SPA の UI 実装・改修（20以上の画面を単一コンポーネントで遷移管理）
・単元・ジャンル選択画面のスマートフォン向けレスポンシブデザイン、ホーム画面レイアウト調整
・OpenAPI 自動生成クライアントを用いた REST API 連携（教科・単元・デッキ・カード・ジャーニー・統計等）
・Firebase Firestore を用いたリアルタイム対戦機能（ロビー、部屋検索、対戦結果）
・管理画面：かんたんモード情報の CRUD（Angular Material）
・ESLint / Prettier / Husky による開発基盤整備、環境別ビルド・GCP App Engine デプロイ対応`,
    tools: `フロントエンド：Angular 20 / TypeScript 5.9 / Angular Signals / Angular Material / Angular Fire / Firebase Firestore
バックエンド：Go 1.25 / chi / OpenAPI 3.0 / oapi-codegen / kagome
インフラ：GCP App Engine / Cloud Datastore / Cloud Storage / Cloud Tasks / IAP
品質・開発：ESLint / Prettier / Husky / OpenAPI Generator / Jasmine / Karma`,
    team: "3名（モバイルフロントエンド担当）",
  },

  "apa-maker": {
    title: "不動産物件スクレイピング・LINE配信管理システム（APA Maker）",
    detail: `複数の不動産ポータルサイト（SUUMO、LIFULL HOME'S、アットホーム、楽待、健美家 等）から収集した物件データを一元管理し、プロジェクト単位の検索条件でフィルタリングした物件をLINE Messaging API で自動・手動配信するWebアプリケーション。不動産投資向けの新着物件通知サービスとして開発（2025年10月 〜 2026年3月）。

外部スクレイパーが登録した物件データをダッシュボードで閲覧・フィルタリングし、スクレイピング完了をトリガーに条件合致の未送信物件を自動LINE配信。土地・戸建て・収益物件の3カテゴリに対応した柔軟なフィルタリング機能を構築し、本番環境へのデプロイ・運用体制を整備。

・React + TypeScript による管理ダッシュボード UI（プロジェクトCRUD、高度なフィルタリング、スクレイピング監視、手動配信）
・NestJS による REST API（物件・プロジェクト管理、自動配信ロジック、LINE Webhook署名検証）
・Flyway による DB マイグレーション（25本以上）、Jest / Vitest / Playwright によるテスト整備
・本番環境構築（nginx、PM2、Let's Encrypt HTTPS）、運用・診断シェルスクリプト整備`,
    tools: `フロントエンド：React 18 / TypeScript / Vite 6 / Radix UI / React Hook Form / Recharts
バックエンド：NestJS 11 / Express / class-validator / Zod / Flyway / MySQL 8.0
API・連携：REST API / Swagger / LINE Messaging API
インフラ：Docker / Docker Compose / nginx / PM2 / Let's Encrypt
テスト：Vitest / Playwright / Jest / Supertest`,
    team: "—",
  },

  fuma: {
    title: "FUMA（企業リスト作成サービス）開発",
    detail: `全国約160万社の企業情報と4万種類の独自業種分類をもとに、完全無料・ログイン不要で企業リストを最短5秒で作成できるB2B向けWebサービスの開発に参画（2025年4月 〜 2025年7月）。無料のFUMA（検索・詳細閲覧）と有料のFDS（CSV出力・Stripe決済）をDigitalOcean上のフロント・バック分離構成で提供。

フロントエンド・バックエンド双方でIPベースアクセス制御機能を設計・実装。Next.js Middleware + Redis による日次30件/週次100件のレート制限、自動ブラックリスト化、ホワイトリストIPによる社内メンバー免除を実現。

・Next.js 15 による検索・企業詳細ページのSSR/SEO対応（GetServerSideProps、OGP、sitemap/robots）
・企業詳細ページのUI改修（Rechartsによる業績グラフ、ランキング表示）
・SearchPopupのバグ修正・サジェスト機能改善、レスポンシブレイアウト調整
・GitHub Actions によるCI/CDパイプライン整備（PM2デプロイ）
・Docker Compose によるローカル開発環境構築（フロント・バック・MySQL・phpMyAdmin）`,
    tools: `フロントエンド：Next.js 15 / React 18 / TypeScript / Material-UI / Tailwind CSS / Redux Toolkit / Recharts / Stripe
バックエンド：Node.js / Express / TypeScript / Sequelize / MySQL 8.0
インフラ：DigitalOcean / Redis / Docker / GitHub Actions / PM2`,
    team: "4〜5名",
  },

  "data-bi": {
    title: "データ分析基盤・ダッシュボード開発",
    detail: `データ分析ダッシュボードにおけるフロントエンド／バックエンド／データベースを跨ぐ分析機能の設計、実装を担当。複数の業務指標を可視化する分析ダッシュボードの構築・改善を実施（BIツールとして Apache Superset を使用）。

・ダッシュボード要件整理・運用ルール策定（カラム定義、命名規則、必須要件、フィルタ・期間指定の考慮点のドキュメント化、データセットとの責務分離・再利用率を考慮した設計指針）
・フロントエンド／BFF連携（データ取得フロー・接続方式の整理と実装、分析画面におけるフィルタ状態の管理、画面遷移時のパラメータ引き継ぎなど分析UXを意識した状態管理）`,
    tools: `バックエンド：Node.js / NestJS / PostgreSQL 等
フロントエンド：Angular / TypeScript / Apache Superset
プラットフォーム：Docker / GitHub / Slack / Teams`,
    team: "PM 2名、バックエンド 1名、フロントエンド 2名",
  },

  "ai-saas": {
    title: "AI活用型SaaSプロダクト立ち上げ支援（MVP開発）",
    detail: `スタートアップ企業における業界特化型AIサービスのMVP開発プロジェクトに参画。CFO直轄プロジェクトとして立ち上げられた新規事業において、フロントエンド領域を中心にサービス立ち上げを支援。

Figmaで作成されたデザインをベースに、Next.jsを用いたフロントエンド開発を担当。バックエンドAPIとの連携実装に加え、利用者体験を意識した画面設計およびUI/UX改善にも携わった。

少人数体制でのアジャイル開発環境において、プロダクト要件の整理、画面仕様の検討、LP制作を含むサービス公開準備まで幅広く担当。開発開始から約3か月で社内レビュー版を構築し、その後の改善開発を経て外部公開を実現。

・Next.js（TypeScript）によるフロントエンド設計・実装
・バックエンドAPI（Python/Django）との連携設計・実装
・Figmaデザインを基にしたUI/UX実装および改善提案
・認証機能、入力フォーム、チャットUI等の実装
・LP（ランディングページ）の設計・実装
・プロダクト要件整理および画面仕様検討
・リリースに向けた品質改善および追加機能開発`,
    tools: `バックエンド：Python / Django / PostgreSQL / OpenAI API 等
フロントエンド：Next.js / TypeScript
プラットフォーム：AWS
その他：Docker / GitHub / Slack / Notion`,
    team: "バックエンド 1名（クライアント側担当者）、フロントエンド 1名",
  },

  edtech: {
    title: "全国小学校向けデジタル教材サービス",
    detail: `民間教科書会社の全国小学校向けデジタル教材サービスの開発プロジェクトへの参画。アプリチーム、ダッシュボード（アクセスログ解析）チームに所属して、ダッシュボードのUI/UXデザインに基づく実装（React）を担当。

提供デザインはFigma、パーフェクトピクセル対応にてFigma/Anima書き出し条件に基づくスタイルコーディング、バックエンドAPIを受けてのデータバインド等を担当。特にUI/UXデザインの忠実な再現に貢献。

その他教材サイトにおける管理ユーティリティ開発を担当（WordPressカスタムプラグイン開発、AWSサーバー調整など）。`,
    tools: `バックエンド：Python / Django / PostgreSQL / DynamoDB
フロントエンド：React / TypeScript
プラットフォーム：AWS
その他：CodeCommit / Slack / Asana / Zoom / WordPress / Figma`,
    team: "10名（アプリ開発チーム 6名、ダッシュボードチーム 4名 他）",
  },

  nesttools: {
    title: "キャンピングカーカスタムメーカーサイト",
    detail: `WEBページ（WordPress）が老朽化したため、管理ツールを含む再構築の依頼を受ける。サーバー環境の移管を含めて Cloud（Firebase・BaaS）へ統合したシステム再構築を提案。

WEB：Firebase Hosting, Storage, Functions / Next.js, MUI
CMS：Firebase Firestore, Authentication, Functions / Angular`,
    tools: `Next.js / React / TypeScript / Firebase / GitHub Actions`,
    team: "2名",
  },

  "travel-app": {
    title: "旅行計画作成アプリ",
    detail: `BtoC（旅行関連）アプリケーションのバックエンドおよびフロントエンドの新規（一部改修）プロジェクトへ参画。

基本フレームとして、ASP.NET MVCプロジェクトベースのアプリの新規改修としてフロントエンド（アプリおよびCMS）をAngularフレームワークに変更、既存DBを活かしてAPIとして整理など。途中プロジェクトメンバー変更などを経て継続中（コロナ期間を経てスケジュール大幅変更）。プロジェクトオーナー都合で一旦休止。新規ネイティブアプリ（iPhone, Android）化へ向けて構想中。`,
    tools: `バックエンド：ASP.NET / SQL Server / Dapper / C# / MVC
フロントエンド：Angular / TypeScript / PWA / Angular Universal
プラットフォーム：Azure（App Service / MSSQL / Azure AD B2C）
CI/CD：GitHub Actions`,
    team: "6名（開発メンバー 3名、コンテンツチーム 3〜5名）",
  },

  corporate: {
    title: "建設会社コーポレートサイト",
    detail: `企画デザイン、フロント実装、管理システム実装。Bootstrapテンプレートを使用したWEBワイヤー構成と実装。管理ツール：BootstrapでUI実装。

オーナーは従来の業界サイトらしくないサイトを希望、要望にかなったサイトデザインを実現。`,
    tools: `Windows / SQL Server / C# / ASP.NET / MVC / jQuery / Bootstrap
Visual Studio（2012）（2013）`,
    team: "3名",
  },

  "ec-vendor": {
    title: "ECサイト（ベンダーパッケージカスタマイズ）",
    detail: `ECパッケージをベースに、顧客ごとのデザインに沿ったUI実装、オプションライブラリ開発、テスト、リリース、メンテナンス作業。

ECベースは ASP.NET（aspx）、データアクセス（ADO.NETベース）。UI回りは jQuery プラグイン使用。通販ERPパッケージと連動するカスタマイズライブラリ等の開発及び既存コードのバグフィックス作業等。`,
    tools: `Windows / SQL Server / C# / ASP.NET / MVC / jQuery / Bootstrap
Visual Studio 2013 / Git（Backlog）/ TFS`,
    team: "3名",
  },

  "matching-app": {
    title: "モデルエージェンシー / クライアントマッチングアプリ",
    detail: `LINE LIFF 上で動作するキャスティング・マッチング Web アプリを設計・開発。
クライアント（発注者）向け・モデル事務所向けの 2 系統 LIFF アプリを
単一 Next.js コードベースから Firebase Hosting へデプロイ。`,
    tools: `Next.js, React, TypeScript, LINE LIFF, Firebase
（Auth / Firestore / Storage / Functions / Hosting）,
Material UI, React Hook Form, GitHub Actions`,
    team: "1名（テクニカルディレクター＆実装担当）",
  },
};
