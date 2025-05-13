import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  const updatedDate = new Date();
  updatedDate.setDate(today.getDate() + count);

  const dateMessage =
    count === 0 ? "Today" : `${count} day${count > 1 ? "s" : ""} from today`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-blue-600 p-6 text-white space-y-8">
        {/* Step Controls */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-300">Step</h2>
          <div className="flex items-center justify-between gap-4">
            <button
              className="w-1/3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
              onClick={() => {
                if (step > 1) {
                  setStep(step - 1);
                }
              }}
            >
              −
            </button>
            <div className="text-xl font-bold">{step}</div>
            <button
              className="w-1/3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition"
              onClick={() => setStep(step + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Count Controls */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-300">Count</h2>
          <div className="flex items-center justify-between gap-4">
            <button
              className="w-1/3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
              onClick={() => {
                if (count >= step) {
                  setCount(count - step);
                } else {
                  setCount(0);
                }
              }}
            >
              −
            </button>
            <div className="text-xl font-bold">{count}</div>
            <button
              className="w-1/3 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition"
              onClick={() => setCount(count + step)}
            >
              +
            </button>
          </div>
        </div>

        {/* Date Message */}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-200">{dateMessage}:</p>
          <p className="text-xl font-bold text-blue-400">
            {updatedDate.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
