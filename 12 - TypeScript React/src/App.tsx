// import Component from "./starter/01-return";
// import Component from "./starter/02-props";
// import Component from "./starter/03-state";
// import Component from "./starter/04-events";
import Component from "./starter/05-challenge";

function App() {
  return (
    <main>
      {/* <Component name="Blaise N." id={23401}>
        <h3>Hello World!</h3>
      </Component>
      <Component name="Teddy N." id={23401} /> */}
      <Component type="basic" name="Susan" />
      <Component
        type="advanced"
        name="Blaise"
        email="theblaisecode@gmail.com"
      />
    </main>
  );
}

export default App;
