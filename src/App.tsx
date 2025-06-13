import {
  Navbar,
  Header,
  Skills,
  Projects,
  Experience,
  Contact,
} from "./components";

function App() {
  return (
    <div className="w-full h-screen bg-white gap-5">
      <div className="flex flex-row justify-center sm:justify-end">
        <Navbar />
      </div>
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
