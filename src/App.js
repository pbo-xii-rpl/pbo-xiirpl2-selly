import "./App.css";

export default function App() {
  return (
    <nav className="navbar bg-blue-600 py-12">
      <div className="container flex mx-auto">
        <div className="w-3/12">
          <div className="logo text-white uppercase font-semibold  tracking-widest text-center text-2xl">
            SANDIL
          </div>
        </div>
        <div className="w-6/12 justify-items-center">
          <ul className="nav flex justify-center space-x-11 text-lg">
            <a className="nav-items font-semibold text-white text-opacity-60" href="#">Profile</a>
            <a className="nav-items font-semibold text-white text-opacity-60" href="#">Skills</a>
            <a className="nav-items font-semibold text-white text-opacity-60" href="#">Projects</a>
            <a className="nav-items font-semibold text-white text-opacity-60" href="#">About</a>
          </ul>
        </div>
        <div className="3/120">
          <div className="button">
            <butto className="border-4 rounded-full px-6 border-white  bg-white text-blue-600 font-semibold my-1 mx-24">Contact</butto>

          </div>
        </div>
      </div>
    </nav>
  )
}