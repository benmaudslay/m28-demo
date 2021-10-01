import { Form } from "../components/Form";

export const SignUp = ({ handleForm }) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Form handleForm={handleForm} />
    </div>
  );
};
