//import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import TableComp from "./components/TableComp";
import { Alert } from "antd";


const App = () => {
  const [search, setSearch] = useState("");
  const [filteredTags, setFilteredTags] = useState([]);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const fetchData = () =>
    fetch(`https://dummyjson.com/posts?skip=0&limit=150`).then((res) =>
      res.json()
    );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["page", page],
    queryFn: () => fetchData(),
    isPlaceholder: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, [data]);

  //useEffect for getting value from the url when component mounts
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const search = queryParams.get("search");
    const page = queryParams.get("page");
    const filter = queryParams.get("filter");

    setSearch(search ? search : "");
    setPage(page ? page : 1);
    setFilteredTags(filter ? filter.split(',') : []);
  }, []);



  //useEffect to redirect to url whenever search, filters or page changes
  useEffect(() => {
    const searchQuery = search ? `&search=${search}` : "";
    const filterQuery = filteredTags?.length > 0 ? `&filter=${filteredTags.join(',')}` : '';

    navigate(`/?page=${page}${searchQuery}${filterQuery}`);

  }, [page, search,filteredTags, navigate]);

 
  return (
    <div className="flex flex-col gap-4 items-center py-2 bg-[#FFFBDA] min-h-screen">
      <SearchBar search={search} setSearch={setSearch} filteredTags={filteredTags} />
      {isError && <Alert message="Error" description={error.message} type="error" />}
      
      <TableComp
        posts={posts}
        search={search}
        setPage={setPage}
        page={page}
        filteredTags={filteredTags}
        setFilteredTags={setFilteredTags}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
