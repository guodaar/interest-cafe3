import { PixabayImage } from "../types/image";
import axios from "axios";

const URL = "https://pixabay.com/api/";
const KEY = "34412223-b54870ac7b7252e9ef6042637";

export const fetchImages = (
  page: number,
  search: string
): Promise<PixabayImage[]> => {
  return axios
    .get(URL, { params: { key: KEY, page, q: search } })
    .then((response) => response.data.hits);
};
