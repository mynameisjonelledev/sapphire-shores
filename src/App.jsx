import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Hotels } from "./components/Hotels";
import { CategoryHotel } from "./components/CategoryHotel";
import { PreFooter } from "./components/PreFooter";
import { Footer } from "./components/Footer";

export function App() {
  return(
    <>
    <Header />
    <Main />
    <Hotels />
    <CategoryHotel />
    <PreFooter />
    <Footer />
    </>
  );
}