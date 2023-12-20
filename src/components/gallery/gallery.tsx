import { useCallback, useEffect, useRef, useState } from 'react';
import { MouseEvent } from 'react';
//components
import GalleryModal from '../gallery-modal/gallery-modal';
//variables
import { webPageRoute } from '../../variables/routing-variables';
//data
import imageData from '../../data/image-data';
//styles
import './gallery.scss';

const Gallery = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && modalRef.current) {
      setIsModalOpen(false);
    }
  }, []);

  const closeModal = (evt: MouseEvent<HTMLDivElement>) => {
    const targetElement = evt.target as Element;

    if (
      !targetElement.closest('.gallery__modal-image') &&
      !targetElement.closest('.swiper-button-prev') &&
      !targetElement.closest('.swiper-button-next')
    ) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyPressRef = handleKeyPress;

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyPressRef);
    }

    return () => {
      if (isModalOpen) {
        document.removeEventListener('keydown', handleKeyPressRef);
      }
    };
  }, [isModalOpen, handleKeyPress]);

  return (
    <section className={`gallery ${isModalOpen && 'galley__modal-open'}`}>
      <h2 className="visually-hidden">Wedding gallery</h2>

      <ul className="gallery__list">
        {imageData.map((image, i) => {
          return (
            <li className="gallery__item" key={`${image}=${i}`}>
              <img
                className="gallery__image"
                src={`${webPageRoute}/${image}`}
                alt=""
                width="200"
                height="200"
                onClick={() => openModal(i)}
              />
            </li>
          );
        })}

        {isModalOpen && activeIndex !== null && (
          <GalleryModal
            closeModal={closeModal}
            imageData={imageData}
            activeIndex={activeIndex}
            modalRef={modalRef}
          />
        )}
      </ul>
    </section>
  );
};

export default Gallery;
