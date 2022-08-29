import TablePagination from '@mui/material/TablePagination';

const Pagination = ({
  imageCount,
  pageNumber,
  setPageNumber,
  itemPerPage,
  setItemPerPage,
}) => {
  const onPageChange = (_, page) => {
    setPageNumber(page);
  };
  const onRowsPerPageChange = (event) => {
    setItemPerPage(event.target.value);
  };
  return (
    <TablePagination
      component="div"
      count={imageCount}
      page={pageNumber}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPage={itemPerPage}
      rowsPerPageOptions={[10, 25, 50]}
      labelRowsPerPage="Images per page"
    />
  );
};

export default Pagination;
