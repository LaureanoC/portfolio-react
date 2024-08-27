export const filter = (
  allprojects,
  django,
  fastapi,
  svelte,
  vanilla,
  java,
  net
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

  if (net) {
    filterTechs.push('.NET')
  }

  const filter = allprojects.filter((p) =>
    filterTechs.every((tech) => p.tech.includes(tech))
  )

  return filter
}
