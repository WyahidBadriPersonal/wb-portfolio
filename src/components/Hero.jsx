import image from "../../src/linkedin-img.png"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}
        >
          <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 
          transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"></img>
        </motion.div>
        <motion.div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        initial={{y:50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}
        > 
          <h1 className="bg-gradient-to-tr from-blue-500 to-pink-500 
          bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">Wyahid Badri</h1>
          <h3 className="bg-gradient-to-tr from-pink-500 to-blue-500 
          bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl">Frontend Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
          As a Frontend Developer with 4 years of experience, I specialize in building responsive, 
          user-centric web interfaces that prioritize both functionality and design. 
          I am proficient in modern web development technologies including HTML5, CSS3, JavaScript, and TypeScript, 
          and have extensive experience using frameworks like React.js to create dynamic applications.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero