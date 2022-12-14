import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>ST List | Home</title>
        <meta name="keywords" content="rubys" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          repudiandae? Molestiae blanditiis, labore id eius dolore consequuntur
          non voluptatum sequi, earum quasi neque iure dicta consectetur
          repellendus rerum cumque. Consectetur?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          quibusdam consectetur veritatis laudantium, veniam aperiam omnis, iste
          odio ullam necessitatibus molestias ab, rem neque? Velit odit quas
          nostrum aperiam in?
        </p>
        <Link href="/strangerThings" legacyBehavior>
          <a className={styles.btn}>See all ST listing</a>
        </Link>
      </div>
    </>
  );
}
