//data
import imageData from '../data/image-data';
//types
import type { ImageGalleryDataType, basicImageDataType } from '../types/image-data-types';

const imageDataAdapter = (data: basicImageDataType): ImageGalleryDataType => {
  const images: ImageGalleryDataType = [];

  for (const imagePath of data) {
    images.push({
      src: imagePath,
      width: 4,
      height: 3,
    });
  }

  return images;
};

const getAdaptedImagesArray = (): ImageGalleryDataType => {
  return imageDataAdapter(imageData);
};

export { imageDataAdapter, getAdaptedImagesArray };
