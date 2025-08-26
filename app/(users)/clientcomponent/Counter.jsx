const { useState } = require("react");

const Counter = () => {
  const [inc, setInc] = useState(0);

  return (
    <button
      className="bg-blue-300 p-2 rounded-xl"
      onClick={() => setInc((prev) => prev + 1)}
    >
      Add:{inc}
    </button>
  );
};

export default Counter;
