import Section from "./Section.jsx";

function Guide() {
  return (
    <main className="px-20 pt-4">
      <Section
        title="Create"
        description="Creates an empty Git repository in the current folder."
        command="git init"
      />
      <Section
        title="Rename"
        description="Renames the current branch to main."
        command="git branch -M main"
      />
      <Section
        title="Connect"
        description="Links this local project to your forked repository on GitHub."
        command="git remote add origin https://github.com/raventongol/CSIT340-G8-Midterms-Tongol.git"
      />
      <Section
        title="Upload"
        description="Sends the main branch to the remote named origin."
        command="git push -u origin main"
      />
    </main>
  );
}

export default Guide;
