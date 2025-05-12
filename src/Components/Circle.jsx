
const Circle = ({step}) => {

    let stage =[0, 1, 2]

  return (
    <div className="flex justify-between gap-6 w-full sm:w-[80%]">
      {stage.map((i) => (
        <div
          key={i}
          className={`w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center rounded-full transition-all duration-300 ${
            step >= i ? "bg-indigo-600 text-white" : "bg-gray-300"
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Circle;
