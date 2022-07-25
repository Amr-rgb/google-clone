import Head from "next/head";
import { Header } from "../components/Header";

const search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      {/* header */}
      <Header />

      {/* search results */}
    </div>
  );
};

export default search;
