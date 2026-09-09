import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/types/case-study";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
    return (
        <Link href={caseStudy.href}>
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.description}</p>
            <Image src={caseStudy.imageSrc} alt={caseStudy.imageAlt} width={400} height={300}></Image>
            <div>
                {caseStudy.techTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </Link>
    )

}