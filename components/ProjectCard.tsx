"use client";

import { Project } from "@/data/project";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 p-5 rounded-xl"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.desc}</p>

      <div className="mt-3 flex gap-2 flex-wrap">
        {project.tech.map((t: string) => (
          <span key={t} className="bg-slate-700 px-2 py-1 text-xs rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}