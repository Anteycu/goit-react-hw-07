import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const searchedName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  return (
    <div className={css.searcher}>
      <h2>Search contact</h2>
      <input value={searchedName} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
