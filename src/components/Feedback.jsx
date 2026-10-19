import { useState } from "react";

function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  return (
    <section className="px-20 py-6">
      <h2 className="text-2xl font-bold">Feedback</h2>
      <div className="mt-4 flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-lg font-bold text-[#EDE9E6]"
          onClick={() => setYes((count) => count + 1)}
        >
          Yes
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-lg font-bold text-[#5C4F4A]"
          onClick={() => setNo((count) => count + 1)}
        >
          No
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-6 py-2 text-lg font-bold"
          onClick={() => {
            setYes(0);
            setNo(0);
          }}
        >
          Clear
        </button>
      </div>
      <p className="mt-4 text-lg">Yes: {yes}</p>
      <p className="text-lg">No: {no}</p>
    </section>
  );
}

export default Feedback;
