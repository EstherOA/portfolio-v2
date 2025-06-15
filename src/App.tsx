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
      <div className="border-t-1 pt-1 mt-15 text-center text-sm z-10">
        <p>Copyright &copy;{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
