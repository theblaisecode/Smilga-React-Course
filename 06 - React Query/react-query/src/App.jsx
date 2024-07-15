import Form from "./Form";
import Items from "./Items";
import { ToastContainer } from "react-toastify";

const App = () => {

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </section>
  );
};

export default App;
