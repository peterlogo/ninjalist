import React from "react";

export const getStaticPaths = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const paths = data.map((ninja) => {
      return {
        params: { id: ninja.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    throw error;
  }
};

export const getStaticProps = async (context) => {
  try {
    const id = context.params.id;
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const data = await response.json();

    return {
      props: {
        ninja: data,
      },
    };
  } catch (error) {
    throw error;
  }
};

export default function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
    </div>
  );
}
