import { Person } from "../components/Person";

export const Dashboard = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Person key={index} fname={item.fname} />
      ))}
    </div>
  );
};
