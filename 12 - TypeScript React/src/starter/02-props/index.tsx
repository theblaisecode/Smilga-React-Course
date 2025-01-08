// function Component({ name, id }: { name: string; id: number }):JSX.Element {
//   return (
//     <div>
//       <h2>Name: {name}</h2>
//       <h2>ID: {id} </h2>
//     </div>
//   );
// }
// export default Component;

// OR

// type ComponentProp = {
//   name: string;
//   id: number;

//   // Handling children props
//   children?: React.ReactNode;
// };

// Better way of handling children prop
import { type PropsWithChildren } from "react";

type ComponentProp = PropsWithChildren<{
  name: string;
  id: number;
}>;

// function Component({ name, id, children }: ComponentProp): JSX.Element {
function Component(props: ComponentProp): JSX.Element {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>ID: {props.id} </h2>
      {props.children}
    </div>
  );
}
export default Component;
