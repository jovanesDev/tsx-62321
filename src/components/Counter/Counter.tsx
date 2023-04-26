import { IProps } from "./interface";

const Counter = (props: IProps) => {
  const { initialValue, jugadoresDeFutbol } = props;

  return (
    <div>
      <h1>Contador</h1>
    </div>
  );
};

export default Counter;
