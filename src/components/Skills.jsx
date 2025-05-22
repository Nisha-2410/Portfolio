
import CloudSkill from './Cloud'
export const Skills = () => {
  return (
<div className='flex justify-center flex-col items-center mt-15'>
  <h1 className='font-bold text-3xl md:text-5xl lg:6xl'>My Skills</h1>

  {/* Row of skills */}
  <div className='flex flex-col justify-center w-full max-w-6xl items-center md:justify-center mt-8 '>

    {/* Left column – move to the start */}
    <div className='flex flex-row  '>
  <CloudSkill skill="C++" overlap={true} />
  <CloudSkill skill="JavaScript" overlap={true} />
  <CloudSkill skill="Python" overlap={true} />


      
    </div>

    {/* Other columns */}
    <div className='flex flex-row '>
      <CloudSkill skill="React" overlap={true}  />
      <CloudSkill  skill="Node.js" overlap={true}  />
      <CloudSkill  skill="HTML"overlap={true} />
    </div>
    <div className='flex flex-row'>
      <CloudSkill  skill="MongoDb"overlap={true} />
      <CloudSkill  skill="MYSQL" overlap={true} />
      <CloudSkill  skill="GitHub"overlap={true}  />
    </div>

  </div>
</div>

  )
}
