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

type ComponentProp = { name: string; id: number };

// function Component({ name, id }: ComponentProp): JSX.Element {
function Component(props: ComponentProp): JSX.Element {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>ID: {props.id} </h2>
    </div>
  );
}
export default Component;
