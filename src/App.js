import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { ReactTyped } from "react-typed";
import oscar from "./Assets/oscar.jpg";

export default function App() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="w-full max-w-[1240px] flex justify-between items-center py-10 mx-auto mb-12">
            <h1 className="text-xl text-b">OskiDEV</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="text-white px-4 py-2 rounded-md ml-8  bg-gradient-to-r from-cyan-500 to-teal-500 "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Oscar Chilaka
            </h2>
            <ReactTyped
              className="text-md font-medium"
              strings={["DEVELOPER AND DESIGNER"]}
              typeSpeed={50}
              backspeed={50}
              loop
            />
            <p className="text-md py-5 leading-6 text-gray-800">
              Front-End developer with great taste for good design and providing
              programming solutions for businesses.
            </p>
          </div>
          <div className="flex  w-full text-5xl justify-center gap-16 py-3 text-gray-600   ">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative  rounded-full w-[500px] h-[500px] mx-auto overflow-hidden my-20">
            <img className="object-cover mt-[-50px]" src={oscar} />
          </div>
        </section>
      </main>
    </div>
  );
}
