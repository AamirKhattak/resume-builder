import React from 'react'

export default function Experience({experiences}) {
    console.log(experiences);
  return (
    <div className='border-rose-600 border-2'>
        {
            experiences.map(experience => <div>
                <div>{experience.companyName}</div>
            </div>)
        }
    </div>
  )
}
