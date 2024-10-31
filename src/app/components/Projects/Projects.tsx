import { projectsList } from './projectsList'

export function Projects() {
  return (
    <div className='flex flex-col gap-2 overflow-auto'>
      {projectsList.map(project => (
        <a
          className='flex flex-row items-start gap-5 font-sans bg-transparent hover:bg-muted p-4 rounded-lg transition-colors duration-500	'
          key={project.name}
          href={project.url}
          target='_blank'
        >
          <div className='h-14 aspect-square rounded-md bg-white'></div>
          <div>
            <h4 className='text-lg font-bold text-foreground'>
              {project.name}
            </h4>
            <p className='mt-1 text-sm font-normal text-muted-foreground'>
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
