import Play from "../components/Play"
import About from "../components/About"
import Start from "../components/Start"
const Home = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
  <div className="fixed top-0 -z-10 h-full w-full">
    <div
      className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24"
      style={{ background: 'url("bgspace.gif") no-repeat center center fixed', backgroundSize: 'cover' }}
    ></div>
  </div>

  <div id="FirstDiv" className="container mx-auto px-20 mb-2 flex flex-col items-center py-30">
    <Play/>
    <About/>
    <Start/>
  </div>
</div>

  )
}

export default Home
// render(<App />, document.getElementById("root"));
