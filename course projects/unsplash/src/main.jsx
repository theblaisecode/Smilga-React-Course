import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalContext from "./components/GlobalContext.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
