import axios from 'axios';
import { mapHitsToImages } from '../helpers';
import { IDataFromPixabay } from '../interfaces';

const API_KEY = '30566454-f43afb5ebde56ee41a44e0f8d';
const PER_PAGE = '12';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query: string, page: number): Promise<IDataFromPixabay> => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
  return {
    total: response.data.total,
    images: mapHitsToImages(response.data.hits),
  };
};
