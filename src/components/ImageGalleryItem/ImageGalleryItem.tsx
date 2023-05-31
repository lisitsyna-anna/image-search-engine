import { useState } from 'react';
import { Modal } from '../Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import { IImage } from '../../interfaces';

interface IImageItemProps extends IImage {
  key?: number;
}

export const ImageGalleryItem: React.FC<IImageItemProps> = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <GalleryItem key={id} onClick={toggleModal}>
        <GalleryImg src={webformatURL} alt={tags} width="400" />
      </GalleryItem>

      {showModal && <Modal largeImageURL={largeImageURL} tags={tags} onClose={toggleModal} />}
    </>
  );
};
