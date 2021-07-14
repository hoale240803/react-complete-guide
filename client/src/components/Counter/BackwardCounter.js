import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);
  console.log("BACKWARD RUNNING");

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
