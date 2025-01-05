import React from "react";
import { SKILL_SHOWCASE } from "../../libs/me";

const Skills = () => {
  return (
    <div className="border-t-[1px] pt-4 border-neutral-900 dark:border-neutral-200">
      <h1 className="text-xl font-semibold">Skills</h1>
      <div className="px-2 space-y-4">
        {SKILL_SHOWCASE.map((item, index) => (
          <div
            data-aos="fade-right"
            data-aos-delay={index * 200}
            className="p-2 mt-4"
            key={index}
          >
            <h2 className="text-lg font-bold">{item.title}</h2>
            <h4 className="text-sm">{item.description}</h4>
            <ul className="p-2 list-disc list-inside text-neutral-800 dark:text-neutral-400">
              {item.skills.map((skill, index) => (
                <li key={index} className="flex flex-col gap-2">
                  {skill.area}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
