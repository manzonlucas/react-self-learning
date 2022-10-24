import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className='w-4/5 m-auto my-8 flex justify-evenly flex-wrap gap-5'>
        {children}
      </main>
      <Footer />
    </>
  )
}