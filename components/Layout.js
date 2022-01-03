import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next - styled components starter</title>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
