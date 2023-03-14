import { useImages } from "../../hooks/images";

const Home = () => {
  const { data } = useImages();
  const images = data || [];

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.previewURL} />
      ))}
    </div>
  );
};

export default Home;
