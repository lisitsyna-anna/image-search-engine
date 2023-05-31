import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, StyledModal } from './Modal.styled';

interface IModalProps {
  largeImageURL: string;
  tags: string;
  onClose: () => void;
}

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

export const Modal: React.FC<IModalProps> = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const hendleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', hendleKeyDown);

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.SyntheticEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <StyledModal>
        <img src={largeImageURL} alt={tags} width="850" />
      </StyledModal>
    </Overlay>,
    modalRoot
  );
};
