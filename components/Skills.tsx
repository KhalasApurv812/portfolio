export default function Skills() {
  const skills = ["React", "Vue", "Next.js", "Tailwind", "TypeScript"];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="bg-slate-700 px-3 py-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}