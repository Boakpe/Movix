import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearcForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + query);
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        className="btn btn-outline-secondary"
        type="submit"
        value="Buscar"
      />
    </form>
  );
};

export default SearcForm;
