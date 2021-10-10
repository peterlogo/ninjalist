import React from "react";
import Link from "next/link";

// fetches data on build time.
export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
      props: {
        ninjas: data,
      },
    };
  } catch (error) {
    throw error;
  }
};

export default function Ninjas({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          <a className="">
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
