import Section from "@/components/Section";

const tags = ["Laravel", "MySQL", "Docker", "AWS EC2"];

const links = [
  {
    label: "Demo",
    href: "http://ec2-35-72-97-239.ap-northeast-1.compute.amazonaws.com",
  },
  { label: "GitHub", href: "https://github.com/hi-san10/ams" },
];

const testAccounts = [
  { role: "一般ユーザー", email: "sato@mail.com", password: "99999999" },
  { role: "管理者", email: "admin@mail.com", password: "00000000" },
];

export default function AmsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mt-6 text-3xl font-bold">
        ams (Attendance Management System)
      </h1>
      <p className="mt-2 text-neutral-600">
        認証・打刻・休憩管理・勤怠一覧の確認・CSV出力ができる勤怠管理アプリ
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
          会員登録・ログイン・ログアウトの認証機能を備えた、勤怠管理アプリです。出勤・退勤・休憩(複数回可)の打刻と、勤怠一覧の確認ができます。一般ユーザーは打刻と修正申請、管理者は申請の承認と勤怠の直接修正・メンバーごとの月次確認・月次勤怠一覧のCSV出力を行えます。
        </p>
      </Section>
      <Section title="課題・目的">
        <p>
          勤怠管理に必要な「打刻 → 修正申請 →
          承認」の一連の業務フローと、一般ユーザー・管理者の権限分岐を、機能一覧をもとにER図・テーブル設計から実装まで一通り作り切ることを目的にしました。
        </p>
      </Section>
      <Section title="技術構成">
        <ul className="list-disc pl-5">
          <li>言語・フレームワーク: PHP 8.3 / Laravel 8.83</li>
          <li>データベース: MySQL 8.0</li>
          <li>Webサーバー: Nginx</li>
          <li>開発環境: Docker</li>
          <li>デプロイ先: AWS EC2</li>
        </ul>
      </Section>
      <Section title="工夫した点">
        <ul className="list-disc pl-5">
          <li>
            ビジネスロジックをサービス層(CorrectionServiceなど)に分けて書きました。修正申請の承認処理は、DBトランザクションで整合性を保つようにしました。
          </li>
          <li>
            入力チェックをFormRequest(CorrectionRequest)に切り出しました。出勤前の休憩や退勤後の休憩を弾くバリデーションも実装しました。
          </li>
          <li>
            アプリの規模に対して過剰だと判断し、リポジトリパターンは採用しませんでした。構成はシンプルに保っています。
          </li>
        </ul>
      </Section>
      <Section title="振り返り">
        <p>
          FormRequestやサービス層への責務の分離によって、コントローラーを肥大化させない書き方と、トランザクションを用いたデータ整合性の考え方を、実装を通して整理できました。
        </p>
      </Section>
      <Section title="テストアカウント">
        <p>
          Demoはこちらのアカウントでログインして確認できます。会員登録はメール認証が必要なため、テストアカウントでの閲覧をお願いします。
        </p>
        <ul className="mt-2 list-disc pl-5">
          {testAccounts.map((account) => (
            <li key={account.role}>
              {account.role}: {account.email} / {account.password}
            </li>
          ))}
        </ul>
      </Section>
      <ul className="mt-10 flex gap-4 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}