/* eslint-disable react/prop-types */
import Filter from "./Filter";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ search, setSearch, filteredTags }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-1/2">
      <input
        type="text"
        placeholder="search post"
        value={search}
        onChange={(e) => handleChange(e)}
        className="w-full  p-2 rounded-lg"
      />

      {filteredTags?.length > 0 && <Filter filteredTags={filteredTags} />}
    </div>
  );
};

export default SearchBar;
