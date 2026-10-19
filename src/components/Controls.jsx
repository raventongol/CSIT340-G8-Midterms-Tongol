function Controls({ onRead, onBookmark, onReset }) {
  return (
    <div className="mt-6 flex gap-4">
      <button
        className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
        onClick={onRead}
      >
        Mark as read
      </button>
      <button
        className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
        onClick={onBookmark}
      >
        Bookmark
      </button>
      <button
        className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;
