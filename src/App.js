import './App.css';
import Student from "./component/student";

function App() {
  return (
    <div className="App">
      <h1 className = "leaders"> LeadersBoard</h1>
       <Student name="Rakesh" university=" MAJU (3 Semester)" score={340} />
       <Student name="Amnah" university=" NUST (5 Semester)" score={340} />
       <Student name="Hassan" university=" VU (6 Semester)" score={349} />
       <Student name="Omer" university=" GIK (7 Semester)" score={300} />
    </div>
  );
}

export default App;
