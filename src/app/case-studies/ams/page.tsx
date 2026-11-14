import Image from "next/image";
import Section from "@/components/Section";

const tags = ["Laravel", "MySQL", "Docker", "AWS EC2"];

const links = [{ label: "GitHub", href: "https://github.com/hi-san10/ams" }];

const videos = [
  { title: "会員登録・認証メール送信", src: "/videos/register.mp4" },
  { title: "ログイン", src: "/videos/login.mp4" },
  { title: "打刻(出勤・休憩・退勤)", src: "/videos/stamp.mp4" },
  { title: "勤怠一覧・修正申請", src: "/videos/correction-request.mp4" },
  { title: "管理者ログイン・申請一覧", src: "/videos/admin.mp4" },
  { title: "月次勤怠・CSV出力(管理者)", src: "/videos/csv-export.mp4" },
];

const screenshots = [
  { alt: "打刻画面", src: "/images/responsive-stamp.png" },
  { alt: "勤怠一覧", src: "/images/responsive-attendance.png" },
  { alt: "修正申請(管理者)", src: "/images/responsive-admin-correction.png" },
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
      <Section title="画面操作">
        <p>
          AWS
          EC2で公開していたデモ環境は現在停止しているため、操作の様子を動画で掲載しています。
        </p>
        <div className="mt-4 space-y-8">
          {videos.map((video) => (
            <div key={video.src}>
              <h3 className="text-sm font-bold">{video.title}</h3>
              <video
                src={video.src}
                controls
                muted
                playsInline
                preload="metadata"
                className="mt-2 w-full rounded border"
              />
            </div>
          ))}
        </div>
      </Section>
      <Section title="レスポンシブ対応">
        <div className="grid grid-cols-3 gap-4">
          {screenshots.map((shot) => (
            <figure key={shot.src}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={854}
                height={1442}
                className="h-auto w-full rounded border"
              />
              <figcaption className="mt-1 text-center text-xs text-neutral-600">
                {shot.alt}
              </figcaption>
            </figure>
          ))}
        </div>
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
          <li>デプロイ先: AWS EC2(現在はデモ環境を停止中)</li>
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
