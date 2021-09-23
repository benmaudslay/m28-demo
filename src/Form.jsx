import { useState } from "react";

export const Form = ({ handleForm }) => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({
      fname,
      sname,
      age
    });

    setFname("")
    setSname("")
    setAge("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={fname} func={setFname} label="First name" name="fname" />
      <Input value={sname} func={setSname} label="Last name" name="sname" />
      <Input value={age} func={setAge} label="Age" name="age" />

      <button type="submit">Submit</button>
    </form>
  );
};

const Input = ({ value, func, name, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        name={name}
        type="text"
        onChange={(e) => func(e.target.value)}
        value={value}
      />
    </>
  );
};
