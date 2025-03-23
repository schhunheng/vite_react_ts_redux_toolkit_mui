import { Button, Typography } from "@mui/material";
import { increment, decrement } from "../redux/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/useAppRedux";
function Home() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  function increase() {
    dispatch(increment());
  }
  function descrease() {
    dispatch(decrement());
  }
  return (
    <>
      <Button onClick={increase}>+</Button>
      Counter:<Typography>{counter}</Typography>
      <Button onClick={descrease}>-</Button>
    </>
  );
}
export default Home;
