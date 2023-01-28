import { ChakraProvider, theme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {
  const [hashtag, setHashtag] = useState(window.location.hash);
  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0);
      const hash = window.location.hash.split("?")[0];
      setHashtag(hash);
    };
    window.onhashchange = handleHashChange;
    return () => {
      window.onhashchange = null;
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      {(hashtag === "" || hashtag === "#") && <LandingPage />}
    </ChakraProvider>
  );
};
