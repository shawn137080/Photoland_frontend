import React from "react";
//icons
import { FiSearch } from "react-icons/fi";
//useNavigate hook
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  //use navigate hook
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isAnimating, setIsAnimating] = React.useState(false);
  const inputRef = React.useRef();

  //useEffect timeout for animation
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });

  //search function
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length > 0) {
      navigate(`/search?q=${searchTerm}`);
      inputRef.current.value = "";
      setSearchTerm("");
    } else {
      //if input is empty
      setIsAnimating(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${isAnimating && "animate-shake"} w-full relative`}>
      <input
      ref={inputRef}
        onChange={handleSearch}
        type="text"
        placeholder="Search"
        className="input"
      />
      <button className="btn btn-accent absolute top-0 right-0 rounded-bl-none rounded-tl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
