import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);

  const steps = [
    "Step 1: Learn React 💡",
    "Step 2: Practice Daily 🛠️",
    "Step 3: Build Projects 🚧",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="flex flex-col items-center bg-gray-200 w-full max-w-2xl rounded-xl p-6 sm:p-10 gap-8">
        {/* Step Circles */}
        <div className="flex justify-between gap-6 w-full sm:w-[80%]">
          {[0, 1, 2].map((i) => (
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

        {/* Step Text */}
        <div className="text-center">
          <h1 className="text-lg sm:text-2xl font-bold">{steps[step]}</h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-[80%] justify-between">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="bg-indigo-600 text-white rounded-3xl py-3 px-6 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setStep(step + 1)}
            disabled={step === steps.length - 1}
            className="bg-indigo-600 text-white rounded-3xl py-3 px-6 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
