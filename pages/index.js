import Head from 'next/head'
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Test Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 w-1/4 text-center">
        <Navbar/>
        <Main/>
        <Footer/>
      </main>
    </div>
  )
}
