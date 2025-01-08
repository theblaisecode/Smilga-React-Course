// import Component from "./starter/01-return";
import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <Component name="Blaise N." id={23401}>
        <h3>Hello World!</h3>
      </Component>
      <Component name="Teddy N." id={23401} />
    </main>
  );
}

export default App;
