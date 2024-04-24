import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { ReactTyped } from "react-typed";
import oscar from "./Assets/oscar.jpg";
import Design from "./Assets/design.png";
import code from "./Assets/code.png";
import consulting from "./Assets/consulting.png";
import web1 from "./Assets/web1.png";
import web2 from "./Assets/web2.png";
import web3 from "./Assets/web3.png";
import web4 from "./Assets/web4.png";
import web5 from "./Assets/web5.png";
import web6 from "./Assets/web6.png";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="w-full max-w-[1366px] flex justify-between items-center py-10 mx-auto mb-12">
            <h1 className="text-xl text-b dark:text-white font-bold cursor-pointer">
              OskiDEV
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white ease-in-out duration-500"
                />
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Oscar Chilaka
            </h2>
            <ReactTyped
              className="text-md font-medium md:text-xl dark:text-gray-200"
              strings={["DEVELOPER AND DESIGNER"]}
              typeSpeed={50}
              backspeed={50}
              loop
            />
            <p className="text-md py-5 leading-6 text-gray-800 md:text-lg max-w-2xl mx-auto dark:text-gray-300">
              Front-End developer with great taste for good design and providing
              programming solutions for businesses.
            </p>
          </div>
          <div className="flex  w-full text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-gray-300 ">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative  rounded-full w-[450px] h-[450px] mx-auto overflow-hidden my-20 md:w-[500px] md:h-[500px] hover:w-[500px] hover:h-[500px]">
            <img className="object-cover mt-[-50px]" src={oscar} />
          </div>
        </section>

        <section className="w-full max-w-[1366px] mx-auto">
          <div className="dark:text-white ">
            <h3 className="text-3xl py-1 font-medium">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the beginning of my journey as a freelance developer, I've
              done work for
              <span className="text-teal-500"> agencies</span> consulted for
              <span className="text-teal-500"> startups</span> and collaborated
              with talentec people to creat digital products for both buisiness
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div className="lg:flex gap-10 lg:w-full ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={Design} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1366px] mx-auto mt-20">
          <div className="dark:text-white">
            <h3 className="text-3xl py-1 font-medium">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the beginning of my journey as a freelance developer, I've
              done work for
              <span className="text-teal-500"> agencies</span> consulted for
              <span className="text-teal-500"> startups</span> and collaborated
              with talentec people to creat digital products for both buisiness
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1">
              <img src={web1} className="object-cover rounded-lg" />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                src={web3}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                src={web4}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                src={web5}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                src={web6}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
