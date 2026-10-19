import { useState } from "react";
import Controls from "./Controls.jsx";
import Header from "./Header.jsx";
import StatCard from "./StatCard.jsx";

function Docs() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead(read + 1);
  }

  function handleBookmark() {
    setBookmarks(bookmarks + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="flex items-end justify-between px-20 pt-10">
      <div>
        <Header />
        <Controls
          onRead={handleRead}
          onBookmark={handleBookmark}
          onReset={handleReset}
        />
      </div>
      <div className="flex gap-6">
        <StatCard value={read} label="Marked as read" />
        <StatCard value={bookmarks} label="Bookmarks" />
      </div>
    </div>
  );
}

export default Docs;
