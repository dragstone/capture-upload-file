import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [image, setImage] = useState(null);
  const handleClick = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle the selected file here, for example, upload it to a server
      console.log("Selected file:", file);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Upload files</h1>
        <input
          type="file"
          accept="image/*"
          // capture="environment"
          id="fileInput"
          onChange={handleClick}
        />
        {image && (
          <img src={image} alt="Captured" width="200px" height="200px" />
        )}
      </main>
    </>
  );
}
