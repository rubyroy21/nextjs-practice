import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((st) => {
    return {
      params: { id: st.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      st: data,
    },
  };
};

const Details = ({ st }) => {
  return (
    <>
      <Head>
        <title>ST List | Detail Page</title>
        <meta name="keywords" content="rubys" />
      </Head>
      <div>
        <h3>{st.name}</h3>
        <p>{st.email}</p>
        <p>{st.website}</p>
        <p>{st.address.city}</p>
      </div>
      <Link href="/strangerThings" legacyBehavior>
        <a className={styles.btn}>Previous Page</a>
      </Link>
    </>
  );
};

export default Details;
