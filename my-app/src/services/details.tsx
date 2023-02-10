const localStorageKey = "bookGenre";

async function getData2 (genre: string) {
    let list = localStorage.getItem(localStorageKey);
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${genre}.json?api-key=FZi6T0tvXiCmPowsTGjVWaT4r0XgcVnw`)
        const data = await response.json()
        const results = data.results.books
        if (results && results.length >0){
            localStorage.setItem(localStorageKey, JSON.stringify(results))
            list = results
        }
        return results
    }
    catch (error) {
        console.log('Hubo un error')
    }

}

async function startApp2(genre: string) {
    const booksData = await getData2(genre);
    const data: { name: any; url: any; onList: any; description: any; }[] = [];
    booksData.forEach((result: { title: any; book_image: any; weeks_on_list: any; description: any; }) => {
        const ourData = {name: result.title, url: result.book_image, onList: result.weeks_on_list, description: result.description}
        data.push(ourData);
    });
    return data;
}
export default startApp2 