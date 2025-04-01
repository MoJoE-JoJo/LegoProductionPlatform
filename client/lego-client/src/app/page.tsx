// import Image from "next/image";

export default async function Home() {
  const data = await fetch('http://localhost:5250/hejsa')
  // const posts = await data.json()

  console.log(await data.json())
    // .then((data) => {
    //   console.log(data);
    //   return data;
    // }
    // );


  return (
    <div>
      yolo
      </div>
    // <ul>
    //   {posts.map((post) => (
    //     <li key={post.id}>{post.title}</li>
    //   ))}
    // </ul>
  )
}
