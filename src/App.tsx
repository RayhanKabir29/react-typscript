import "./App.css";

import Container from "./components/Container";

function App() {
  // const personName = {
  //   first: "Rayhan",
  //   last: "Kabir",
  // };
  // const nameList = [
  //   { first: "Rayhan", last: "Kabir" },
  //   {
  //     first: "Umayer",
  //     last: "Abdullah",
  //   },
  //   {
  //     first: "Sabir",
  //     last: "Ahmed",
  //   },
  // ];
  return (
    <div className="App">
      {/* <Greet name="Kabir" numberofMesage={20} isLoggedin={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar Goes To Me!</Heading>
      </Oscar>
      <Greet name="Kabir" isLoggedin={true}></Greet> */}
      {/* <Button handleClick={(event, id) => console.log("Clicked", event, id)} />
      <Input value=" " handleChange={(event) => console.log("Clicked")} /> */}
      <Container styles={{ border: "1px solid red", padding: "6px" }} />
    </div>
  );
}

export default App;
