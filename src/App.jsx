import Docs from "./components/Docs.jsx";
import Guide from "./components/Guide.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author="Raven A. Tongol" />
      <Docs />
      <Guide />
    </div>
  );
}

export default App;