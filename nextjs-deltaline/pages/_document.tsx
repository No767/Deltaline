import { createGetInitialProps } from "@mantine/next";
import Document, { Html, Head, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="Deltaline-Logo-V2.1.svg"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
