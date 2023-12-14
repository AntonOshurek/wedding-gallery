interface IImageGalleryItemType {
  src: string;
  width: number;
  height: number;
}

type ImageGalleryDataType = IImageGalleryItemType[];

type basicImageDataType = string[];

export type { IImageGalleryItemType, ImageGalleryDataType, basicImageDataType };
