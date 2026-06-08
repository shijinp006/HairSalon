import { useEffect } from "react";
import Lenis from "lenis";
import { LandingPage } from "./component/landingPage";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;