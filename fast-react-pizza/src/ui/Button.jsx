import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "sm:px-6 sm:py-4 link:bg-red-400 text-sm disabled:cursor-not-allowed inline-block rounded-full bg-yellow-400 p-4 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400";

  const styles = {
    primary: base + `px-4 py-3 md:px-6 md:py-4`,
    small: base + `px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    secondary:
      "sm:px-6 sm:py-4 px-4 py-2.5 text-sm md:px-6 md:py-3.5 link:bg-red-400 \
      disabled:cursor-not-allowed inline-block rounded-full border-2 border-stone-300 \
       p-4 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 \
       hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 \
       focus:ring-offset-2 active:bg-slate-400",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };
  if (onClick) {
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
