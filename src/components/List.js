import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageItem from './ImageItem';

const List = ({ images }) => {
  return images.length ? (
    <ImageList cols={5} gap={14}>
      {images.map((image) => (
        <ImageItem image={image} key={image.id} />
      ))}
    </ImageList>
  ) : (
    <Box py={10}>No results</Box>
  );
};

export default List;
