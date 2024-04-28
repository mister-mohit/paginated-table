/* eslint-disable react/prop-types */
import { Table } from "antd";
import { filterData } from "./util/filter";
import { getColumns } from "./util/getColumns";

// eslint-disable-next-line react/prop-types
const TableComp = ({
  posts,
  search,
  isLoading,
  setPage,
  page,
  filteredTags,
  setFilteredTags,
}) => {
  // eslint-disable-next-line react/prop-types
  const dataToShow = filterData(posts, search, filteredTags);
  const columns = getColumns(filteredTags);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleTableChange = (pagination, filters, sorters, extra) => {
    if (extra.action === "filter") {
      setFilteredTags(filters.tags ? filters.tags : []);
    }
  };

  return (
    <div className="max-h-screen">
      <Table
        rowKey={"id"}
        columns={columns}
        dataSource={dataToShow}
        onChange={handleTableChange}
        pagination={{
          pageSize: 6,
          total: dataToShow.length,
          onChange: handlePageChange,
          current: page,
          position: ["bottomCenter"],
        }}
        loading={isLoading}
        scroll={true}
      />
    </div>
  );
};

export default TableComp;
