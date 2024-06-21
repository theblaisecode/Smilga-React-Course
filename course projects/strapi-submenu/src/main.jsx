import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import GlobalContext from "./GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
