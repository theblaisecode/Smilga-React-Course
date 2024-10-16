import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";

function App() {
  return (
    <main>
      <GlobalLayout />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
