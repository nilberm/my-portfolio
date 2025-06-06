import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import ProjectCard from "../shared/ProjectCard";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A modern e-commerce platform with a focus on user experience and performance. Built with Next.js and Tailwind CSS.",
    image: "/projects/alpha.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#",
    theme: "primary",
  },
  {
    title: "Project Beta",
    description:
      "A collaborative task management app designed for small teams. Features real-time updates with Firebase.",
    image: "/projects/beta.jpg",
    tags: ["React", "Firebase", "Material UI", "Node.js"],
    github: "#",
    demo: "#",
    theme: "accent",
  },
  {
    title: "Portfolio v1",
    description:
      "My previous personal portfolio website, built with vanilla HTML, CSS, and JavaScript. A fun project to learn the basics.",
    image: "/projects/portfolio.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: null,
    theme: "yellow",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>
          A selection of projects that showcase my skills in frontend
          development, UI/UX design, and problem-solving.
        </SectionSubtitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
