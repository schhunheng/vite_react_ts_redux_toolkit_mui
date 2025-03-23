import { Box } from "@mui/material";
import { useGetTodosQuery } from "../redux/todo";

function TodoPage() {
  const { data, isLoading } = useGetTodosQuery("");
  return (
    <Box>
      <h1>Todo App</h1>
      {isLoading && <p>Loading...</p>}
      {data?.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </Box>
  );
}
export default TodoPage;
