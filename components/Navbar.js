import React, { useState } from "react";
import NS from "../styles/Navbar.module.css";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  // console.log(NS);
  const [text, settext] = useState("");

  const textChange = (e) => {
    settext(e.target.value);
  };
  const searchMovies = (e) => {
    e.preventDefault();
    router.push(`/query/${text}`);
  };

  return (
    <>
      <header className={NS.header}>
        <div className="menuBar">
          <i className="fas fa-bars" id="Menu"></i>
        </div>
        <nav>
          <ul className={NS.ul}>
            <Link href={"/"}>
              <li className={NS.li}>Home</li>
            </Link>
            <li className={NS.li}>About</li>
            <li className={NS.li}>APis</li>
            <li className={NS.li}>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <div>
              <i className="fas fa-times" id="close"></i>
            </div>
          </ul>
        </nav>
        <div className={NS.searchBar}>
          <form id="form" onSubmit={searchMovies}>
            <input
              type="text"
              placeholder="Search Movies"
              className={NS.input}
              onChange={textChange}
              value={text}
            />
            <button type="submit">
              <AiOutlineSearch className={NS.searchIcon} />
            </button>
          </form>
        </div>
      </header>
    </>
  );
}
