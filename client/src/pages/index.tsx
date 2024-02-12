import styles from "@/styles/Home.module.css";
import {Posts} from "@/types";

export const getStaticProps = async () => {
  const response = await fetch("https://blog-backend-dcxu.onrender.com/api/posts", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
  });
  const data = await response.json();

  return {
    props: {
      posts: data
    }
  }
}

const Home = ({posts} : Posts) => {
  
  return (
    <main className={styles.content}>
      <ul className={styles.postList}>
        {posts.data.map((post) => {
          return (
            <li key={post.id}>{post.attributes.title}</li>
          )
        })}
      </ul>
    </main>
  );
}
 
export default Home;
