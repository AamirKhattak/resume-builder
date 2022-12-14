import React from "react";

export default function Skill({ skills }) {
  return (
    <div className="border-rose-600 border-2 flex flex-row">
      <div className="text-xl font-bold m-6">Skills</div>
      <div className="flex flex-row">
        {skills.map((skill) => (
          <div>{skill.name}</div>
        ))}
      </div>
    </div>
  );
}
