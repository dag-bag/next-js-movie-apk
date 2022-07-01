import Link from "next/link";
import React from "react";
import C from "../styles/Category.module.css";

export default function Category(props) {
  const genres = [
    "Action",
    "Crime",
    "Drama",
    "Mystery",
    "Adventure",
    "Fantasy",
    "Romance",
    "Film-Noir",
    "Comedy",
    "Horror",
    "Thriller",
    "Sport",
    "Documentary",
  ];
  const api = `https://yts.mx/api/v2/list_movies.json?page=1&genre=`;

  return (
    <div className={C.Ccontainer}>
      {genres.map((item) => {
        return (
          <Link href={`/genres/${item}`} key={item}>
            <button className={C.btn} key={item} value={item}>
              {item}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
