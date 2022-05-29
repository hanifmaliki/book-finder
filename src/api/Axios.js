import axios from "axios";

export async function getBooks(input) {
    let data = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + input);
    return data?.data
}

export async function getFavBooks() {
    const data = await axios.get('https://book-finder-backend.vercel.app/api/getFavBooks');
    return data?.data
}

export async function insertFavBooks(inputs) {
    const { id, title, link, authors, rating } = inputs
    const authorsStr = JSON.stringify(authors)
    const data = await axios.post('https://book-finder-backend.vercel.app/api/insertFavBooks', {
        id: id,
        title: title,
        link: link,
        authors: authorsStr,
        rating: rating
    });
    return data?.data
}

export async function deleteFavBooks(input) {
    const data = await axios.get('https://book-finder-backend.vercel.app/api/deleteFavBooks?id=' + input);
    return data?.data
}