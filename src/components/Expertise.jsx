import { motion } from "framer-motion"
import { CUSINES } from "../constants"


const containerVariants= {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1
    }
  }
}
const itemVariants = {
  hidden: {
    opacity: 0, y:20
  },
  show: {
    opacity: 1, y: 0, transition: {
      duration: 0.8
    }
  }
}
const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter">
        Our Expertise
      </h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show"
        
        className="container mx-auto px-4">
         {CUSINES.map((cuisine, index) =>  (
            <motion.div 
              variants={itemVariants}
             key={index} className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2">
             <div className="flex-shrink-0 pr-8 text-2xl"> {cuisine.number} </div>
             <div className=" w-1/3 flex-shrink-0"> 
              <img src={cuisine.image} alt={cuisine.name} className="h-auto rounded-3xl" />
             </div>
             <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">{cuisine.title}</h3>
              <p className="mt-4 text-lg tracking-tighter"> 
               {cuisine.description}
              </p>
             </div>
            </motion.div>
         ))}
      </motion.div>
    </section>
  )
}

export default Expertise