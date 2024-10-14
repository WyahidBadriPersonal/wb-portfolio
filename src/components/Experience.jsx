import { motion } from "framer-motion"

const Experience = () => {
  const variants ={
    hidden:{opacity:0, y:50},
    visible:{opacity:1,y:0}
  }
  return (
    <div id="experience" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">

      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="text-4xl font-light text-white md:text-6xl">Experience</motion.h1>

      <motion.div 
       variants={variants}
       initial="hidden"
       whileInView="visible"
       transition={{duration:0.5}}
      className="items-center justify-center gap-10 p-5">
        <motion.div
        initial={{x:-50, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}
        >
          <h1 className="bg-gradient-to-tr from-blue-500 to-pink-500 
          bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl p-5"><strong>Frontend Developer @ </strong>Revtrax <small>02/2022 - 09/2024</small></h1>
          <ul className="list-disc md:text-base text-pretty text-sm text-gray-100">
            <li>Naviagte large codebase which help various versions of JavaScript 
              to upkeep existing functioanlity
            </li>
            <li>Sunset various pages in the internal UI as needed</li>
            <li> Enhanced functionality by building validators and improving
            navigation and layout structures using HTML/CSS, jQuery.</li>
            <li> Collaborated with internal teams to create mockups and deliver
            custom web pages within sprints.</li>
            <li> Developed high-profile client web pages with advanced shopping
            cart features for brands like Kimberly-Clark.</li>
          </ul>
        </motion.div>
        
        <motion.div
         initial={{x:50, opacity:0}}
         animate={{x:0, opacity:1}}
         transition={{duration: 0.8, delay: 0.2}}
        >
          <h1 className="bg-gradient-to-tr from-pink-500 to-blue-500 
          bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl p-5"><strong>Frontend Developer @ </strong>Log.ai <small>02/2019 - 09/2021</small></h1>
          <ul className="list-disc md:text-base text-pretty text-sm text-gray-100">
            <li> Assisted in the development of a Customer Order Portal using
              ReactJS and NodeJS which allowed customers to interact with
              warehouse stock and send requests.
            </li>
            <li>Assist with the custom shopping cart and barcode reader functionality</li>
            <li> Collaborated with the UX team to build wireframes and design
              components, enhancing user interactions with the web portal.
            </li>
            <li>Assist other team members with building React Functional Components</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience