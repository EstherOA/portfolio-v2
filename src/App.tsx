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
    <div className="w-full bg-white mt-2 sm:mt-5">
      <div className="h-screen">
        <div className="flex flex-row justify-center sm:justify-end sm:pr-5">
          <Navbar />
        </div>
        <Header />
      </div>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
