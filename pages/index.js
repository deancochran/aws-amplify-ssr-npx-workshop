/* pages/index.js */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home({ breeds = [] }) {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    setBreedList(Object.keys(breeds));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify Hosting Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify Hosting Test App</h1>
        <br />
        <select>
          {breedList.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = "https://dog.ceo/api/breeds/list/all";
  const res = await fetch(url);
  const data = await res.json();
  const breeds = data.message;

  return {
    props: { breeds },
  };
}
