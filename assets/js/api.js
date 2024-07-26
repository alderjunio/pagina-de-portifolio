
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/alderjunio/pagina-de-portifolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

