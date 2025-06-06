import SectionSubtitle from "../ui/SectionSubtitle";
import { GraduationCap, School } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>
          A passionate Frontend Developer dedicated to crafting beautiful,
          functional, and user-centric web experiences. I thrive on turning
          complex problems into elegant solutions.
        </SectionSubtitle>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h3 className="text-2xl font-sora font-semibold mb-6">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Hello! I'm Nilber, a frontend developer with a keen eye for design
              and a love for clean, efficient code. My journey into web
              development started with a fascination for how websites could
              blend artistry with technology. Since then, I've been on a
              continuous quest to learn and master the tools and techniques that
              bring digital ideas to life.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I believe in the power of collaboration, continuous learning, and
              the importance of building accessible and performant applications.
              When I'm not coding, you might find me exploring new design
              trends, contributing to open-source, or enjoying a good cup of
              coffee.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-sora font-semibold mb-6">
              Education & Values
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <GraduationCap className="h-6 w-6 text-primary dark:text-primary-light mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">
                    Brigham Young University - Idaho
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Bachelor's Degree in Applied Technology
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <School className="h-6 w-6 text-primary dark:text-primary-light mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Digital College</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Technologist in Systems Analysis and Development
                  </p>
                </div>
              </li>
            </ul>

            <h4 className="text-xl font-sora font-semibold mt-8 mb-3">
              Key Strengths:
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Clean Code",
                "Performance Optimization",
                "Responsive Design",
                "Accessibility (A11Y)",
                "Design Thinking",
                "Problem Solving",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-primary-light/20 dark:bg-primary-dark/30 text-primary-dark dark:text-primary-light text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
