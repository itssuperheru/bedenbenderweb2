
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bedenbenderweb from "../components/bedenbenderweb";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Bedenbenderweb />
      </main>
      <Footer />
    </>
  );
}
