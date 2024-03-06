import Nav from "../components/nav/Nav.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";
  import { useState } from "react";
  import deved from "../../public/dev-ed-wave.png";
  import code from "../../public/code.png";
  import design from "../../public/design.png";
  import consulting from "../../public/consulting.png";
  import web1 from "../../public/web1.png";
  import web2 from "../../public/web2.png";
  import web3 from "../../public/web3.png";
  import web4 from "../../public/web4.png";
  import web5 from "../../public/web5.png";
  import web6 from "../../public/web6.png";

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "");
  console.log(userInfo);

  if (userInfo) {
    return (
      <div>
        <div className={darkMode ? "bg-white" : "bg-slate-700"}>
        
        <main className={`${darkMode} ? 'bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40' : 'bg-slate-700 text-gray-300' `}>
          <section className="min-h-screen">
          <Nav darkMode = {darkMode} setDarkMode={setDarkMode}/>

            <div className="text-center p-10 py-10">
              <h2 className= {`${darkMode ? 'text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'
              : 'text-5xl py-2 text-teal-300 font-medium  md:text-6xl'}`} >
             Welcom   {userInfo.firstName} {userInfo.lastName}
              </h2>
              <h3 className={`${darkMode ? 'text-2xl py-2 dark:text-white md:text-3xl' : 
            'text-2xl py-2 text-gray-300 md:text-3xl '
            }`}>
               khalil haouas Web-Developper.
              </h3>
              <p className={`${darkMode ? 'text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl': 'text-md py-5 leading-8 text-gray-300 max-w-xl mx-auto md:text-xl'}`}>
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
              </p>
              <div className={`${darkMode ? 'text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400' : 
            'text-5xl flex justify-center gap-16 py-3 text-gray-300 dark:text-gray-200'}`}>
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <img src={deved} objectFit="cover" />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className={`${darkMode ? 'text-3xl py-1 dark:text-white ' : 'text-3xl py-1 text-white '}`}>Services I offer</h3>
              <p className={`${darkMode ? 'text-md py-2 leading-8 text-gray-800 dark:text-gray-200' : 'text-md py-2 leading-8 text-gray-300 '}`}>
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className={`${darkMode ? 'text-teal-500' : 'text-gray-300'}`}> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className={`${darkMode ? 'text-md py-2 leading-8 text-gray-800 dark:text-gray-200' : 'text-md py-2 leading-8 text-gray-300 '}`}>
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className={`${darkMode ? 'text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1' : 'text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1'}`}>
                <img src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Tailwind</p>
                <p className="text-gray-800 py-1">Css/Scss</p>
                <p className="text-gray-800 py-1">Bootstrap</p>
                <p className="text-gray-800 py-1">Chadcn</p>
              </div>
              <div className={`${darkMode ? 'text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1' : 'text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1'}`}>
                <img src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let's make it a
                  reality.
                </p>
                <h4 className="py-4 text-teal-600">JavaScript</h4>
                <p className="text-gray-800 py-1">TypeScriptt</p>
                <p className="text-gray-800 py-1">React/Js/Ts</p>
                <p className="text-gray-800 py-1">NextJs</p>
              </div>
              <div className={`${darkMode ? 'text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1' : 'text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1'}`}>
                <img src={consulting} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">tailwind</p>
                <p className="text-gray-800 py-1">Css/Scss</p>
                <p className="text-gray-800 py-1">Bootstrap</p>
                <p className="text-gray-800 py-1">Chadcn</p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className={`${darkMode ? 'text-3xl py-1 dark:text-white ' : 'text-3xl py-1 text-gray-300 '}`}>Portofolio</h3>
              <p className={`${darkMode ? 'text-md py-2 leading-8 text-gray-800 dark:text-gray-300' : 'text-md py-2 leading-8 text-gray-300 '}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
                distinctio magni blanditiis quia voluptatibus accusantium nesciunt
                facere dicta maiores optio?
                <span className="text-teal-500"> agencies </span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                quam tempore molestiae recusandae autem commodi ea quibusdam animi
                accusantium iusto.
              </p>
              <p className={`${darkMode ? 'text-md py-2 leading-8 text-gray-800 dark:text-gray-200' : 'text-md py-2 leading-8 text-gray-300 '}`}>
                I offer from a wide range of and programming ,, .
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web2}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web3}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web4}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web5}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web6}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      </div>
    );
  } else {
   return <NotFoundPage />;
  }
};

export default HomePage;





  
