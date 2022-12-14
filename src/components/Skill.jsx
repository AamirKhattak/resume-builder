import React from "react";
import Section from "./Section";

export default function Skill({ skills }) {
  return (
    <div className="flex flex-row align-middle">
      <Section name={"Skills"}/>
      <div className="flex flex-row align-middle">
        {skills.map((skill) => (
          <div className="inline-block mx-1 flex-wrap text-gray-900">{skill.name}</div>
        ))}
      </div>
    </div>
  );
}
