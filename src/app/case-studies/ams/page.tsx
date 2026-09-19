import Section from "@/components/Section";

const tags = ["Laravel", "MySQL", "Docker", "AWS EC2"];

const links = [
  { label: "GitHub", href: "https://github.com/hi-san10/ams" },
  // デプロイ後に追加: { label: "Demo", href: "https://..." },
];

export default function AmsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mt-6 text-3xl font-bold">
        ams (Attendance Management System)
      </h1>
      <p className="mt-2 text-neutral-600">
        打刻・休憩管理・勤怠一覧確認ができる勤怠管理アプリ
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
          出勤・退勤・休憩(複数回可)の打刻と、勤怠一覧の確認ができる勤怠管理アプリです。
          一般ユーザーは打刻と修正申請、管理者は申請の承認と勤怠の直接修正・メンバーごとの月次確認を行えます。
        </p>
      </Section>

      <Section title="課題・目的">
        <p>
          勤怠管理に必要な「打刻 → 修正申請 → 承認」の一連の業務フローと、
          一般ユーザー・管理者の権限分岐を、設計から実装まで一通り作り切ることを目的にしました。
        </p>
      </Section>

      <Section title="技術構成">
        <ul className="list-disc pl-5">
          <li>言語・FW: PHP 8.3 / Laravel 8.83</li>
          <li>データベース: MySQL 8.0</li>
          <li>Web サーバー: Nginx</li>
          <li>実行環境: Docker(デプロイ先は AWS EC2)</li>
        </ul>
      </Section>

      <Section title="工夫した点">
        <ul className="list-disc pl-5">
          <li>
            ビジネスロジックをサービス層(CorrectionService など)に分離し、
            修正申請の承認処理は DB トランザクションで整合性を担保
          </li>
          <li>
            入力検証を FormRequest(CorrectionRequest)に切り出し、
            出勤前の休憩・退勤後の休憩を弾くバリデーションを実装
          </li>
          <li>
            アプリ規模に対して過剰なため、リポジトリパターンは採用せず、
            構成をシンプルに保った
          </li>
        </ul>
      </Section>

      <Section title="学び">
        <p>
          責務の分離(FormRequest / サービス層)と、トランザクションを用いた
          データ整合性の考え方を、実装を通して整理できました。
        </p>
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