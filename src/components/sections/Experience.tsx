import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import TechTag from "../shared/TechTag";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Experience</SectionTitle>
        <SectionSubtitle>
          A timeline of my professional journey, highlighting key roles,
          responsibilities, and technologies I've worked with.
        </SectionSubtitle>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-0 h-full w-0.5 bg-primary/30 dark:bg-primary-light/30 left-4 md:left-1/2 transform md:-translate-x-1/2"></div>

          {/* Experience Item 1 */}
          <div className="mb-12 flex md:items-center w-full">
            <div className="hidden md:block w-1/2"></div>
            <div className="md:w-1/2 md:pl-8 relative">
              <div className="absolute -left-0.5 md:-left-3.5 top-1 w-8 h-8 bg-primary dark:bg-primary-light rounded-full border-4 border-light-bg dark:border-dark-bg"></div>
              <div className="ml-10 md:ml-0 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border">
                <h3 className="text-xl font-sora font-semibold mb-1">
                  Frontend Developer
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  Accenture | Jan 2023 - Present
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  Developing and maintaining responsive user interfaces for
                  enterprise-level applications using React, AEM, and modern
                  frontend technologies.
                </p>
                <div className="flex flex-wrap gap-1">
                  {[
                    "React",
                    "AEM",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Agile",
                  ].map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="mb-12 flex md:items-center w-full">
            <div className="md:w-1/2 md:pr-8 relative text-right">
              <div className="absolute -right-0.5 md:-left-3.5 top-1 w-8 h-8 bg-primary dark:bg-primary-light rounded-full border-4 border-light-bg dark:border-dark-bg md:translate-x-[-290%] lg:translate-x-[-360%] xl:translate-x-[-440%]"></div>
              <div className="ml-auto mr-10 md:mr-0 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border text-left">
                <h3 className="text-xl font-sora font-semibold mb-1">
                  Software Engineer Intern
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  BYU-Idaho | Sep 2022 - Dec 2022
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  Contributed to the development of internal tools and
                  applications. Gained hands-on experience with full-stack
                  development practices.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Python", "JavaScript", "SQL", "Git"].map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
