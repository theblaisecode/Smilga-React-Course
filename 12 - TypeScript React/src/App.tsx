// import Component from "./starter/01-return";
// import Component from "./starter/02-props";
// import Component from "./starter/03-state";
// import Component from "./starter/04-events";
// import Component from "./starter/05-challenge";
// import Component from "./starter/06-context";
// import Component from "./starter/07-reducers";
// import Component from "./starter/08-fetch-data";
import Component from "./starter/09-rtk";

function App() {
  return (
    <main>
      {/* <Component name="Blaise N." id={23401}>
        <h3>Hello World!</h3>
      </Component>
      <Component name="Teddy N." id={23401} /> */}
      {/* <Component type="basic" name="Susan" />
      <Component
        type="advanced"
        name="Blaise"
        email="theblaisecode@gmail.com"
      /> */}
      <Component />
    </main>
  );
}

export default App;

/*
type Basic = {
  type: "basic";
  name: string;
};

type Advanced = {
  type: "advanced";
  name: string;
  email: string;
};

type cardType = Basic | Advanced;

function Component(props: cardType) {
  const { type, name } = props;

  if (type === "basic") {
    return (
      <div className="alert alert-success">
        <h3>User : {name}</h3>
      </div>
    );
  }
  
  return (
    <div className="alert alert-danger">
      <h3>User : {name}</h3>
      <h3>Email : {props.email}</h3>
    </div>
  );
}

export default Component;

*/
