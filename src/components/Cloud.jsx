import cloudImg from "../assets/skillContainer.png"; 

const CloudSkill = ({ skill, overlap, glowStyle }) => {
  return (
    <div
      className={`relative flex-shrink-0 w-30 md:w-60 lg:w-[300px] flex items-center justify-center text-gray-800 font-semibold select-none text-xl ${
        overlap ? '-mt-10' : ''
      }`}
    >
      <img
        src={cloudImg}
        alt="cloud"
        className="w-full md:w-[150%] lg:w-[180%] object-contain z-0 pointer-events-none"
      />
      <div className="absolute z-10 mt-2 text-sm md:text-xl" style={glowStyle}>
        {skill}
      </div>
    </div>
  );
};

export default CloudSkill;




