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

type ComponentProp = {
  name: string;
  id: number;
  childern?: React.ReactNode;
};

function Component({ name, id,childern }: ComponentProp): JSX.Element {
// function Component(props: ComponentProp): JSX.Element {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>ID: {id} </h2>
      {childern}
    </div>
  );
}
export default Component;
