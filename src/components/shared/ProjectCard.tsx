import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string | null;
  theme: "primary" | "accent" | "yellow";
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  theme,
}: ProjectCardProps) {
  const themeColor = {
    primary: "text-primary dark:text-primary-light",
    accent: "text-accent dark:text-accent-light",
    yellow: "text-yellow-500 dark:text-yellow-400",
  }[theme];

  return (
    <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-light-border dark:border-dark-border group">
      <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg mb-4 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-sora font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
        {description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-primary-light/20 dark:bg-primary-dark/30 text-primary-dark dark:text-primary-light text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${themeColor} hover:underline text-sm font-medium`}
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${themeColor} hover:underline text-sm font-medium`}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
