import "./App.css";
import Button from "./components/Button";

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
      <Button handleClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
