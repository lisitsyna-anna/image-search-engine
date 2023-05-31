import { IImage } from '../../interfaces';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImagesList } from './ImageGallery.styled';

interface IIMageGalleryProps {
  images: IImage[];
}

export const ImageGallery: React.FC<IIMageGalleryProps> = ({ images }) => {
  return (
    <ImagesList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          id={id}
        />
      ))}
    </ImagesList>
  );
};
