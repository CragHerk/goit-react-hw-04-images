// utils/api.js

import axios from 'axios';

const API_KEY = '35097594-2079bd5e4adb4155ba76a6246';
const BASE_URL = 'https://pixabay.com/api/';

const searchImages = async (searchQuery, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${encodeURIComponent(
        searchQuery
      )}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const imageData = response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));

    return imageData;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export default searchImages;
