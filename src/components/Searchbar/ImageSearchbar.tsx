import { useAppDispatch, useAppSelector } from "../../hooks/store";

import Searchbar from "./Searchbar";
import { debounce } from "lodash";
import { onChange } from "../../store/searchSlice";

const ImageSearchbar = () => {
  const value = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const handleChangeSearch = (value: string) => {
    dispatch(onChange(value));
  };

  return <Searchbar value={value} setValue={handleChangeSearch} />;
};

export default ImageSearchbar;
