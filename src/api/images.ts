import { PixabayImage } from "../types/image";
import axios from "axios";

const URL = "https://pixabay.com/api/";
const KEY = "34412223-b54870ac7b7252e9ef6042637";

export const fetchImages = (): Promise<PixabayImage[]> => {
  return axios
    .get(URL, { params: { key: KEY } })
    .then((response) => response.data.hits);
};
