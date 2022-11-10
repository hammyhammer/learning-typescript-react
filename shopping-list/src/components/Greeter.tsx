import React from 'react';

export default function Greeter(): JSX.Element {
  return (
    <h1>Hello There</h1>
  )
}

// const Greeter: React.FC = () => {
//   return <h1>Hello There x2aå</h1>
// }

// export default Greeter

// Both of the examples above are valid. 
// .FC is discouraged though. You may see it in other
// code bases. It is an older way of writing a component 
// The first example is the syntax that create-react-app uses
// nowadays.


