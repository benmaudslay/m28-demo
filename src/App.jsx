import './App.css';

const App = () => {
  return (
    <div>
      <h1>hi world</h1>
      <Person></Person>
      <Person />
    </div>
  );
}

// component tree = app > person > moonbear

const Person = () => {
  return (
    <div>
      <h1>my name is desmond</h1>
      <Moonbear />
    </div>
  )
}

const Moonbear = () => {
  return (
    <h2>How did I get here?</h2>
  )
}

export default App;
