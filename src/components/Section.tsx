type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-10">
      <h2 className="border-b border-neutral-200 pb-1 text-xl font-semibold">
        {title}
      </h2>
      <div className="mt-3 space-y-2 leading-relaxed text-neutral-800">
        {children}
      </div>
    </section>
  );
}
