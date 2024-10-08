export const filter = (
  allprojects,
  django,
  fastapi,
  svelte,
  vanilla,
  java,
  react
) => {
  let filterTechs = []

  if (django) {
    filterTechs.push('Django')
  }

  if (fastapi) {
    filterTechs.push('Fast API')
  }

  if (svelte) {
    filterTechs.push('Svelte')
  }

  if (vanilla) {
    filterTechs.push('Javascript Vanilla')
  }

  if (java) {
    filterTechs.push('Java JDBC')
    filterTechs.push('Java Servlet')
  }


  if (react) {
    filterTechs.push('React')
  }

  const filter = allprojects.filter((p) =>
    filterTechs.every((tech) => p.tech.includes(tech))
  )

  return filter
}

export const getProject = (projects, id) => {
  return projects.find((p) => p.id === id)
}
