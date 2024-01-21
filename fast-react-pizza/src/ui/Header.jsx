import { Link } from "react-router-dom";
import SearchOrder from "../features/user/searchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-yellow-800 bg-yellow-500 px-4 py-3 uppercase  sm:px-6 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username></Username>
    </header>
  );
}
