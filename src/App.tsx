import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Rayhan",
    last: "Kabir",
  };
  const nameList = [
    { first: "Rayhan", last: "Kabir" },
    {
      first: "Umayer",
      last: "Abdullah",
    },
    {
      first: "Sabir",
      last: "Ahmed",
    },
  ];
  return (
    <div className="App">
      <Greet name="Kabir" numberofMesage={20} isLoggedin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
