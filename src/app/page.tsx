import CaseStudyCard from '@/components/CaseStudyCard';
import { CaseStudy } from '@/types/case-study';

const amsData: CaseStudy = {
  title: "ams (Attendance Management System)",
  description: "打刻・休憩管理・勤怠一覧確認ができる勤怠管理アプリ",
  techTags: ["Laravel", "MySQL", "Docker", "AWS EC2",],
  imageSrc: "/images/ams.png",
  imageAlt: "amsの管理者による1ユーザーの勤怠一覧画面のスクリーンショット",
  href: "case-studies/ams",
};

const freelanceProjectData: CaseStudy = {
  title: 'freelanceProject',
  description: 'フロントエンド実装からテスト環境構築まで担当したクライアント案件',
  techTags: ['Next.js', 'React', 'TypeScript',],
  imageSrc: '/images/freelance-project.png',
  imageAlt: 'freelanceProjectのフロントエンド実装画面のスクリーンショット',
  href: 'case-studies/freelance-project/',
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <CaseStudyCard caseStudy={amsData}></CaseStudyCard>
      <CaseStudyCard caseStudy={freelanceProjectData}></CaseStudyCard>
    </div>
  );
}