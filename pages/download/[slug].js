import Image from "next/image";

import D from "../../styles/Download.module.css";

export default function Download({ respData }) {
  let movie = respData.data.movie;

  //   const api = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

  const {
    title,
    title_long,
    year,
    rating,
    genres,
    description_full,
    torrents,
    large_cover_image,
    background_image_original,
    id,
  } = movie;
  console.log(genres);

  return (
    <>
      <div
        className={D.downloadPage}
        // style={{
        //   background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background_image_original})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
        key={id}
      >
        <div className={D.downloadCol}>
          <div className={D.leftCol}>
            <h1 className={D.h1}>{title_long}</h1>
            <h2 className={D.titles}>
              Year:<span className={D.span}>{year}</span>{" "}
            </h2>
            <h2 className={D.titles}>
              Ratings:<span className={D.span}> {rating}</span>{" "}
            </h2>
            <h2 className={D.titles}>
              genres:
              {genres === undefined
                ? "Not avalible"
                : genres.map((i) => {
                    return (
                      <span className={D.span} key={i}>
                        {" "}
                        {i} |{" "}
                      </span>
                    );
                  })}
            </h2>
            <div className={D.about}>
              <h2 className={D.h2}>About the movie</h2>
              <p className={D.para}>{description_full}</p>
            </div>
          </div>
          <div className={D.rightCol}>
            <div className={D.imgContainer}>
              <Image
                src={large_cover_image}
                alt=""
                className={D.img}
                // objectFit="cover"
                layout="responsive"
                // objectPosition={"absolute"}
                height={400}
                width={300}
              />
            </div>
            <button>Download Now</button>
            <div className={D.btn2}>
              {torrents === undefined
                ? "not"
                : torrents.map((item) => {
                    const { quality, size, url } = item;
                    return (
                      <a href={url} key={size} className={D.donwloadLinks}>
                        {quality}|{size}
                      </a>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${context.query.slug}`
  );
  const respData = await resp.json();
  console.log(respData.data);
  //   let data = [];
  //   if (respData.data.movie_count === 0) {
  //     data = [];
  //   } else {
  //     data = respData.data.movies;
  //   }

  // setMoviesdat(data);

  //   setlength(data.length);
  //   setCount(respData.data.movie_count);
  //   setMovies(Movies.concat(data));
  //   setPage(Page + 1);
  return {
    props: { respData }, // will be passed to the page component as props
  };
}
