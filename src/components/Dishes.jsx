import { DISHES } from "../constants"
import DisheCard from "./DisheCard"

const Dishes = () => {
  return (
    <div className="py-16 mx-auto container" id="dishes">
    <h1 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">Our Dishes</h1>
    <div className="grid grid-cols-1  gap-8 md:grid-cols-3 lg:grid-cols-5 ">
        {DISHES.map((el, index) =>  <DisheCard project={el} key={index}/>
    )
    }
    </div>
    </div>
  )
}

export default Dishes