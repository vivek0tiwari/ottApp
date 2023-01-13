import {Widget} from '../../layout-parser/types'
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
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  releaseDate: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface ImageProps {
  imageURL: string;
  height: number;
  width: number;
  aspectRatio: number;
}
