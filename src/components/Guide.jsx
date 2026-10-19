import Section from "./Section.jsx";

const sections = [
  {
    title: "Create",
    description: "Creates an empty Git repository in the current folder.",
    command: "git init",
  },
  {
    title: "Rename",
    description: "Renames the current branch to main.",
    command: "git branch -M main",
  },
  {
    title: "Connect",
    description: "Links this local project to your forked repository on GitHub.",
    command: "git remote add origin https://github.com/raventongol/CSIT340-G8-Midterms-Tongol.git",
  },
  {
    title: "Upload",
    description: "Sends the main branch to the remote named origin.",
    command: "git push -u origin main",
  },
];

function Guide() {
  return (
    <main className="px-20 pt-4">
      {sections.map(({ title, description, command }) => (
        <Section
          key={title}
          title={title}
          description={description}
          command={command}
        />
      ))}
    </main>
  );
}

export default Guide;
