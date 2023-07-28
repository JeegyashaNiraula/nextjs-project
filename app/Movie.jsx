import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, id, poster_path, release_date }) {
  const imagepath = "https://image.tmdb.org/t/p/original";
  console.log(poster_path);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagepath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
