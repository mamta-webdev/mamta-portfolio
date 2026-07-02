import { useInView } from "../hooks/useInView";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/portfolioData";
import { BG1 } from "../utils/constants";

export default function Projects() {
  const [ref, inView] = useInView();
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 0", background: BG1 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <SectionTitle icon="📁" text="Projects" />

        {/* Featured card */}
        <ProjectCard project={featured} featured inView={inView} />

        {/* Grid */}
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}