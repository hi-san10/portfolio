import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/types/case-study";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={caseStudy.href}
      className="block border border-border rounded-lg overflow-hidden bg-surface shadow-sm hover:shadow-md transition-shadow"
    >
      <Image
        src={caseStudy.imageSrc}
        alt={caseStudy.imageAlt}
        width={400}
        height={300}
        className="w-full h-72 object-left"
      />
      <div className="p-4">
        <h3 className="font-bold text-foreground">{caseStudy.title}</h3>
        <p className="text-text-muted">{caseStudy.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {caseStudy.techTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-background border border-border text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}