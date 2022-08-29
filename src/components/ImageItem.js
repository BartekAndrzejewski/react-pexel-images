import ImageListItem from '@mui/material/ImageListItem';

const ImageItem = ({ image }) => {
  return (
    <ImageListItem>
      <img
        src={image.src.portrait}
        alt={image.alt}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default ImageItem;
