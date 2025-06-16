import React from 'react'
const skills = [
  { name: 'HTML', percent: 85, color: 'bg-green-500' },
  { name: 'CSS', percent: 70, color: 'bg-blue-500' },
  { name: 'JavaScript', percent: 65, color: 'bg-yellow-500' },
  { name: 'Tailwind CSS', percent: 50, color: 'bg-cyan-500' },
  { name: 'ReactJS', percent: 60, color: 'bg-indigo-500' },
];
const Skills = () => {
  return (
    <div className='p-8'>
         <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-8">My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="text-xl font-medium text-gray-700">{skill.name}</span>
            <span className="text-xl font-medium text-gray-700">{skill.percent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`${skill.color} h-4 rounded-full`}
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Skills