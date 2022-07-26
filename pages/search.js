import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { SearchResults } from "../components/SearchResults";
import Response from "../Response";

const search = ({ results }) => {
  const router = useRouter();

  console.log(results);

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
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

  const usedummyData = true;
  const startIndex = context.query.start;

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
