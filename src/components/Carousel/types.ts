import {RequestObj} from '../../layout-parser/types';

export interface Widget {
  loadType: string;
  dataRequestObject: RequestObj;
  type: string;
  hash: string;
  height: number;
  width: number;
  orientation: string;
}

export interface CarouselProps extends Widget {
  carouselItems: Array<CarosuelItemProps>;
  carouselTitle: string;
  moveToNextPage: (
    correntPage: number,
    totalPages: number,
    totalItems: number,
  ) => void;
}
export interface CarosuelItemProps {
  adult: boolean;
  backdropPath: string;
  genreIds: Array<number>;
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
export interface ImageProps {
  imageURL: string;
  height: number;
  width: number;
  aspectRatio: number;
}
