 import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import "../styles/module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from '../components/explore';



export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <Header />
    <Explore />
    {/* <Component {...pageProps} /> */}
    </>
   
  );
}
