import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";

function App() {
  return (
    <main>
      <GlobalLayout />
      <BrowserRouter>
        <Routes path="/" element={<GlobalLayout/>}>
          <Route index={true} element={<}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
