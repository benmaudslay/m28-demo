import { useState } from "react";

import "./App.css";
import { Form } from "./Form";

const App = () => {
  const [userForm, setUserForm] = useState([]);

  const handleForm = (data) => {
    setUserForm([...userForm, data]);
  };

  return (
    <div className="wrapper">
      <Form handleForm={handleForm} />
      {userForm.map((item, index) => (
        <Person key={index} fname={item.fname} />
      ))}
    </div>
  );
};

const Person = (props) => {
  return <h1>Welcome {props.fname}</h1>;
};

export default App;
