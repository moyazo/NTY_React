// import React , { FC } from 'react';
// import Card from '../components/dashBoardCard/card';

const localStorageKey = "bookList";

async function getData (): Promise<any>{
    const localStorageBooks: string | null = localStorage.getItem(localStorageKey);
    let list = localStorageBooks ? JSON.parse(localStorageBooks) : [];
     
    if (!list || list.length === 0) {
        try {
            const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=FZi6T0tvXiCmPowsTGjVWaT4r0XgcVnw');
            const data = await response.json();
            const results = data.results;
            if (results && results.length >0){
                localStorage.setItem(localStorageKey, JSON.stringify(results));
                list = results;
            }
        }
        catch (error) {
            console.log('Hubo un error')
        }
    }
    return list;
}

// async function startApp() {
    // const booksData : Array<any>  = await getData();
//     console.log('hola tio esto esla api')

// // booksData.forEach(result => {
   
// //     const ourData = {name: result.list_name , old: result.oldest_published_date,new: result.newest_published_date, update: result.updated};
    

// // });
// }

export default getData();

