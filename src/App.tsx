import "./App.css";
import Heading from "./components/Heading";
import Status from "./components/Status";

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
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
    </div>
  );
}

export default App;
