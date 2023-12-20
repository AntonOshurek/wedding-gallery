import { MouseEvent } from 'react';
// import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
//variables
import { webPageRoute } from '../../variables/routing-variables';
//styles
import './gallery-modal.scss';
import './swiper.scss';

interface IGalleryMofalProps {
  closeModal: (evt: MouseEvent<HTMLDivElement>) => void;
  imageData: string[];
  activeIndex: number;
  modalRef: React.RefObject<HTMLDivElement>;
}

const GalleryModal = ({
  closeModal,
  imageData,
  activeIndex,
  modalRef,
}: IGalleryMofalProps): JSX.Element => {
  return (
    <div className="gallery-modal" onClick={closeModal} ref={modalRef}>
      <Swiper navigation initialSlide={activeIndex} modules={[Navigation]}>
        {imageData.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="gallery-modal__image" src={`${webPageRoute}/${image}`} alt={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryModal;
