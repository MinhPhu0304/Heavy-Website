
function injectAllLibrary(libraries) {
  const element = document.getElementById('injectMe')
  return libraries.map(lib => {
    const scriptTag = document.createElement('script')
    const text = document.createElement('p')
    text.textContent = lib.name
    scriptTag.src = lib.latest
    element.appendChild(scriptTag)
    element.appendChild(text)
  })
}

async function kickStartImportHell() {
  const libraries = await fetch('https://api.cdnjs.com/libraries').then(resp => resp.json())
  injectAllLibrary(libraries.results)
}

kickStartImportHell()