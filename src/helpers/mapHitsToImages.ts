import { IImage } from '../interfaces';

export const mapHitsToImages = (hits: IImage[]) => {
  return hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
};
