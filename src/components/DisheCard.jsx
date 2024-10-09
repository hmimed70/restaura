
const DisheCard = ({ project }) => {
  return (
    <section className="flex justify-center items-center flex-col">
        <img src={project.image}
          alt={project.title}
          className="rounded-3xl p-2 w-4/5 md:w-full" 
          />
          <div className="p-4">
            <h3 className="mb-2 text-2xl font-bold tracking-tighter">
              {project.title}
            </h3>
            <p className="text-sm">{project.description}</p>
          </div>
    </section>
  )
}

export default DisheCard