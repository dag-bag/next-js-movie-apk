import { useRouter } from "next/router";
import Slider from "../../components/Slider";

const Genre = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const { genre } = router.query;

  return (
    <div>
      <Slider data={data} />
    </div>
  );
};

export default Genre;

export async function getServerSideProps(context) {
  const resp = await fetch(
    `https://yts.mx/api/v2/list_movies.json?page=1&genre=${context.query.genre}`
  );
  const respData = await resp.json();
  const data = respData.data.movies;

  // setMovies(data);

  //   setlength(data.length);
  //   setCount(respData.data.movie_count);
  //   setMovies(Movies.concat(data));
  //   setPage(Page + 1);
  return {
    props: { data }, // will be passed to the page component as props
  };
}
