"use client";

const ClientComponent = () => {
  return (
    <>
      <h1>Client Component</h1>
      <button
        className="bg-amber-300 p-2 rounded-xl"
        onClick={() => alert("Hello")}
      >
        Click Me
      </button>
    </>
  );
};

export default ClientComponent;
