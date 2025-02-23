import React from 'react'
import {SKILLS} from "../constants"
const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
        <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
        <div className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
            {SKILLS.map((skill,index)=>(
                <div key={index}className="mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                        {skill.icon}
                        <h3 className="px-6 text-xl lg:text-3xl">{skill.name}</h3>
                    </div>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default Skills
