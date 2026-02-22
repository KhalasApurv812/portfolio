import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="p-6">
      <Hero />

      <h2 className="text-2xl font-bold mt-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>

      <Skills />
      <Experience />
      <CTA />
    </main>
  );
}