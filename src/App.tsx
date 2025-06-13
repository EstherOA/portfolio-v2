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
    <div className="w-full h-screen bg-white mt-2 sm:mt-5 sm:pr-5">
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
