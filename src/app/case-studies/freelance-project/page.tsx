import Section from "@/components/Section";

const tags = ["Next.js", "React", "TypeScript"];

export default function FreelanceProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">freelanceProject</h1>
      <p className="mt-2 text-neutral-600">
        フロントエンド実装からテスト環境構築まで担当したクライアント案件
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="rounded border px-2 py-0.5 text-xs">
            {tag}
          </li>
        ))}
      </ul>
      <Section title="概要">
        <p>
          会員管理系のWebサービスの開発に、フロントエンドの実装を主な担当として参画しました。実装のほかに、E2Eテスト環境の構築も担当しています。開発はIssue単位のチーム開発です。
        </p>
      </Section>
      <Section title="担当範囲">
        <ul className="list-disc pl-5">
          <li>
            メンバーリスト画面の実装(メンバーの一覧表示・追加・削除)。画面単位で担当したのはこの1画面です。
          </li>
          <li>画面に紐づかない部品コンポーネントの実装</li>
          <li>API連携部分の実装(本番APIではなくモックで実装)</li>
          <li>
            PlaywrightによるE2Eテスト環境のセットアップと、メンバーリスト画面のテストの作成
          </li>
        </ul>
      </Section>
      <Section title="技術構成">
        <ul className="list-disc pl-5">
          <li>
            フロントエンド: Next.js 16 / React 19 / TypeScript 5 / Tailwind CSS
            4 / HeroUI
          </li>
          <li>テスト: Playwright(E2E)</li>
          <li>開発環境: Docker</li>
        </ul>
        <p className="text-sm text-neutral-600">
          バックエンド(Laravel)はテスト関連で触れた程度で、DBには触れていません。
        </p>
      </Section>
      <Section title="実装内容">
        <ul className="list-disc pl-5">
          <li>
            メンバーリスト画面で、一覧の中へメールアドレスの入力欄を追加してメンバーを追加できるようにしました。追加中の入力欄の状態(入力内容やエラー)は、カスタムフックで管理しました。
          </li>
          <li>
            入力チェックのルール(メールアドレスの形式など)を1つのファイルにまとめ、入力欄からフォーカスが外れたときにチェックするようにしました。プロジェクトに設定済みの日本語エラーメッセージを、この画面用の文言に上書きしました。
          </li>
          <li>
            メンバーの取得・追加・削除のAPI処理を、本番APIではなくモックデータで実装しました。特定のメールアドレスを入力すると、重複・形式不正のエラーが返るようにして、エラー時の表示も確認できるようにしています。
          </li>
          <li>
            重複したメールアドレスや形式が不正なメールアドレスなど、エラーの種類ごとに専用のエラークラスを作りました。メンバーの追加に失敗すると、API側でそのエラーをthrowします。画面側ではtry/catchで受け取り、instanceofでどのエラーかを調べて処理を分けます。
          </li>
          <li>
            HeroUIのコンポーネントでは、Tailwindで背景色を変えても反映されなかったため、divをベースにしたチェックボックスのカードを自作しました。divは標準ではチェックボックスとして扱われないので、
            {'role="checkbox"'}
            を付けてチェックボックスとして認識されるようにし、useIdでIDを生成しました。WAI-ARIAに沿って、キーボードだけでもフォーカス移動などができるようにしています。
          </li>
          <li>
            PlaywrightでE2Eテストの環境を作り、メンバーリスト画面の実装と合わせてその画面のテストも書きました。テストの操作はpages/、テスト本体はspecs/に分けて書く形(Page
            Object
            Model)にし、要素の指定はdata-testidで行っています。実行と結果のHTMLレポートを開く処理は、Makefileに登録して短いコマンドで呼べるようにしています。
          </li>
        </ul>
      </Section>
      <Section title="開発の進め方">
        <p>
          Issue単位で開発し、実装前に方針(既存コードの調査結果、使用する既存部品、チームへの確認事項)をまとめてIssueで共有してから実装を進めました。PRレビュー、Git運用、CIを含むチーム開発のフローを経験しました。
        </p>
      </Section>
    </main>
  );
}
