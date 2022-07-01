import Slider from "../../components/Slider";

const Query = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <Slider data={data} />
    </div>
  );
};

export default Query;

export async function getServerSideProps(context) {
  // console.log(context.query);
  const resp = await fetch(
    `https://yts.mx/api/v2/list_movies.json?query_term=${context.query.query}`
  );
  const respData = await resp.json();
  let data = [];
  if (respData.data.movie_count === 0) {
    data = [];
  } else {
    data = respData.data.movies;
  }

  // setMoviesdat(data);

  //   setlength(data.length);
  //   setCount(respData.data.movie_count);
  //   setMovies(Movies.concat(data));
  //   setPage(Page + 1);
  return {
    props: { data }, // will be passed to the page component as props
  };
}
