import React from 'react'
import Section from './Section';

export default function Experience({experiences}) {
    console.log(experiences);
  return (
    <div className='flex flex-row align-middle'>

    <div>
      <Section name="Experience" />
      </div>
      <div>
        {
            experiences.map(experience => <div>
                <div>{experience.companyName}</div>
            </div>)
        }
        </div>
    </div>
  )
}
