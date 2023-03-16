import { ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import LinearProgress from "@mui/material/LinearProgress";
import { PixabayImage } from "../../types/image";
import { uniqBy } from "lodash";
import { useImages } from "../../hooks/images";

const Home = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<PixabayImage[]>([]);
  const { data, isLoading } = useImages(page);
  const images = data || [];

  useEffect(() => {
    if (!isLoading) {
      setItems((prevItems) =>
        uniqBy([...prevItems, ...images], (image) => image.id)
      );
    }
  }, [images]);

  const fetchData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchData}
      hasMore={true}
      loader={<LinearProgress />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <ImageList variant="quilted" cols={4} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.previewURL}>
            <img
              src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.id.toString()}
              loading="lazy"
              style={{ borderRadius: "5px" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </InfiniteScroll>
  );
};

export default Home;
