import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to my site</h1>
      <p>Please <Link to="/signUp">sign up</Link> to continue</p>
    </div>
  );
};


// Extend existing component styling with styled components:
// const StyledLink = styled(Link)`

// `