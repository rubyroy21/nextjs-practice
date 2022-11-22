import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/st.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      strangerThings: data,
    },
  };
};

const Ruby = ({ strangerThings }) => {
  return (
    <>
      <Head>
        <title>ST List | ST List</title>
        <meta name="keywords" content="rubys" />
      </Head>
      <div>
        <h1>All ST Listing</h1>
        {strangerThings.map((st) => (
          <Link href={"/strangerThings/" + st.id} legacyBehavior key={st.id}>
            <a className={styles.single}>
              <h3>{st.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ruby;
