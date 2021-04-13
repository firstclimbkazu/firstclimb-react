// Before _app.js
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// After _app.ts
import '../styles/globals.css'
import {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component { ...pageProps } />
}

export default MyApp
