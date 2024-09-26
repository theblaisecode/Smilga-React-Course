import { skills } from "../data";
import SectionTitle from "./SectionTitle";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="h-16 w-16">{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="container pt-10">
        <SectionTitle text="tech stack " />

        <div className=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
