// eslint-disable-next-line no-unused-vars
import React from 'react';

const Gebejimai = () => {
  const skills = [
    { icon: "🖥️", name: "JavaScript" },
    { icon: "⚛️", name: "React" },
    { icon: "🐍", name: "Python" },
    { icon: "💾", name: "SQL" },
  ];

  return (
    <div className="skills">
      <h2>Gebejimai</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.icon}</span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gebejimai;
