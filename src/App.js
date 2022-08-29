import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import List from './components/List';
import Pagination from './components/Pagination';
import SearchForm from './components/SearchForm';
import axiosInstance from './axios/axiosInstance';


function App() {
  const [searchPhrase, setSearchPhrase] = useState('lake');

  const [images, setImages] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const setFetchedData = ({ total_results, photos }) => {
    setItemCount(total_results);
    setImages(photos);
  };

  useEffect(() => {
    if (searchPhrase.length) {
      const pageNum = pageNumber + 1;
      setIsLoading(true);
      axiosInstance
        .get(
          `https://api.pexels.com/v1/search?query=${searchPhrase}&page=${pageNum}&per_page=${itemPerPage}`
        )
        .then(({ data }) => {
          setFetchedData(data);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [itemPerPage, searchPhrase, pageNumber]);

  return (
    <>
      <CssBaseline />
      <SearchForm
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      {!isLoading ? (
        <Container>
          <List images={images} />
          <Pagination
            imageCount={itemCount}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            itemPerPage={itemPerPage}
            setItemPerPage={setItemPerPage}
          />
        </Container>
      ) : (
        <LinearProgress />
      )}
    </>
  );
}

export default App;
