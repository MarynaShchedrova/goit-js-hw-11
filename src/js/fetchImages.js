import axios from 'axios';
// Збереження ключа API в окремому файлі змінних
const KEY = '34187261-edb3bdfe414ee3b7adebeccc5';

// Перевірка помилок під час виконання запиту до серверу
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImages(query, page, perPage) {
    const response = await axios.get(
        `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    );
    return response.data;
}

export { fetchImages };