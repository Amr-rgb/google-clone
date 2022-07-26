import Head from "next/head";
import Router from "next/router";
import { Header } from "../components/Header";
import { SearchResults } from "../components/SearchResults";
import Response from "../Response";

const search = ({ results }) => {
  return (
    <div>
      <Head>
        <title>{Router.query.term} - Google Search</title>
      </Head>

      {/* header */}
      <Header />

      {/* search results */}
      <SearchResults results={results} />
    </div>
  );
};

export default search;

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const usedummyData = false;
  const startIndex = context.query.start || "0";

  const data = usedummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
