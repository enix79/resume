import "../styles/_globals.scss";
import "antd/dist/antd.css";
import '../styles/home.css';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
