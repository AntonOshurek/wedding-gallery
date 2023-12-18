import { useCallback, useEffect, useRef, useState } from 'react';
import { MouseEvent } from 'react';
//data
import imageData from '../../data/image-data';
//styles
import './gallery.scss';

// import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

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
                src={`/wedding-gallery/${image}`}
                alt=""
                width="200"
                height="200"
                onClick={() => openModal(i)}
              />
            </li>
          );
        })}

        {isModalOpen && activeIndex !== null && (
          <div className="gallery__modal" onClick={closeModal} ref={modalRef}>
            <Swiper navigation initialSlide={activeIndex} modules={[Navigation]}>
              {imageData.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="gallery__modal-image"
                    src={`/wedding-gallery/${image}`}
                    alt={image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </ul>
    </section>
  );
};

export default Gallery;
