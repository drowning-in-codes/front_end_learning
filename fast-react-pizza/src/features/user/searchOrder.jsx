import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="sm:w-62 transition-duration:300 w-28 rounded-full bg-yellow-100 px-4 py-2 indent-2 text-sm transition-all placeholder:text-stone-400 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50  md:w-56"
        type="text"
        name=""
        id=""
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
