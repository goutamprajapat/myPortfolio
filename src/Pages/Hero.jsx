import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
// import a from "../assets/animate.webp";
// import r from "../assets/animate-ring.webp";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const textvariants = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const buttonvariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <div className="flex items-center justify-center mt-32 ">
        <div className="flex flex-col gap-4 max-md:pl-7 md:items-center">
          <motion.div
            className="flex flex-col gap-4 text-4xl capitalize md:items-center"
            variants={textvariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 className="tracking-widest max-md:text-gray-200xl animate-pulse">
              Crafting
            </motion.h2>
            <motion.h1
              variants={textvariants}
              className="text-4xl font-bold uppercase lg:text-6xl"
            >
              Modern Web Applications
            </motion.h1>
            <motion.h1> with Gautam Prajapat</motion.h1>
          </motion.div>
          <motion.div
            variants={buttonvariants}
            initial="initial"
            animate="animate"
            className="flex gap-4"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              variants={buttonvariants}
              className="py-2 transition-colors duration-700 rounded-md px-7 outline hover:bg-purple-500/40 outline-1 outline-purple-400"
            >
              Contact Us
            </motion.button>
            <motion.button
              variants={buttonvariants}
              onClick={() => navigate("/about")}
              className="py-2 transition-colors duration-700 rounded-md px-7 outline bg-purple-500/40 outline-1 outline-purple-400"
            >
              About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
      <motion.div className="top-0 w-full ">
        {/* <motion.img
          src={a}
          className="fixed z-10 rotate-45 right-16 bottom-3 md:top-32"
          alt=""
          width={100}
        /> */}
        {/* <motion.img
          src={a}
          className="fixed hidden xl:block rotate-12 lg:left-60 -right-12 top-24 md:top-52"
          alt=""
          width={100}
        /> */}
        {/* <img
          src={a}
          className="fixed z-20 rotate-12 right-48 md:top-1/2"
          alt=""
          width={50}
        /> */}
        {/* <img
          src={r}
          className="fixed right-2/3 md:top-2/3"
          alt=""
          width={100}
        /> */}
        <FaCode className="fixed text-2xl animate-bounce left-56 top-32" />
        {/* <FaCode className="fixed text-2xl animate-ping right-2/2 top-34" /> */}
        <FaCode className="fixed text-4xl animate-pulse right-1/3 top-52" />
      </motion.div>
    </>
  );
};

export default Hero;
