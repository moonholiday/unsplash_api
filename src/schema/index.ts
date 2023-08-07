export interface ImagesInterface {
  id: string;
  urls: {
    regular: string;
  };
}

export interface ImagesListInterface {
  total: number;
  total_pages: number;
  results: ImagesInterface[];
}
