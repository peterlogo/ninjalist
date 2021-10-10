import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keyword" content="ninjas" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>lorem</p>
        <p>lorem</p>
        <Link href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  );
}
