import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}