import { Button, Flex, Text } from "@radix-ui/themes";
import {
  useTodoCreateMutation,
  useTodoListQuery
} from "../../../api/todo/todo.queries";
import { AsyncQueryView } from "../../shared/components/z/AsyncQueryView/AsyncQueryView";
import "@radix-ui/themes/styles.css";

export const QueryDemo = () => {
  const todoListQuery = useTodoListQuery();
  const createTodoMutation = useTodoCreateMutation();

  const handleSearch = () => {
    todoListQuery.refetch();
  };

  const handleCreate = async () => {
    await createTodoMutation.mutateAsync();
  };

  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button variant="solid">Edit profile</Button>
      </Flex>
      <button onClick={handleSearch}>FETCH ALL</button>
      <button onClick={handleCreate}>CREATE</button>
      <AsyncQueryView
        query={todoListQuery}
        data={data => <div>{JSON.stringify(data)}</div>}
      />
    </>
  );
};
