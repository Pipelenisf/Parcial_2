export async function getData() {
    try {   
    } catch (error) {   
        console.error(error);
    }
    const data = await fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json)
    return data
}