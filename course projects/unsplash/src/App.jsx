import Form from "./components/Form/Form";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import { useGlobalContext } from "./components/GlobalContext";

function App() {
  const { isDarkMode, toggleTheme } = useGlobalContext();

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Form isDarkMode={isDarkMode} />
      <Gallery isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
