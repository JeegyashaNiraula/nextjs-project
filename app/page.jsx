import Movie from "./Movie";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}

// "use client";
// import { useState,useEffect } from "react";
// const MyComponent = () => {
//   const [movies, setMovies] = useState([]);

//   const fetchPopularMovies = async () => {
//     try {
//       const apiKey = "c174f2ccbd6b0c7700d1a7e468ee1803";
//       const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error("Error fetching popular movies:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPopularMovies();
//   }, []);

//   return (
//     <div>
//       <h1>Popular Movies</h1>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;
