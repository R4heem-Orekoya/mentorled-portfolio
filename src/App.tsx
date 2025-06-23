import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Header from "./components/sections/header";

export default function App() {
  return (
    <main className="max-w-[45rem] space-y-20 mx-auto py-16 md:py-20 xl:py-24 px-4 md:px-6">
      <Header />
      <About />
      <Contact />
    </main>
  )
}

