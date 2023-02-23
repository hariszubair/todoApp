import AddNewToDo from "./add-new-todo";
import ToDoList from "./todo-list";

const getTodos = async () => {
  let todos = await fetch("https://todo-api-five-pearl.vercel.app/api/todo/list", { cache: 'no-store' });
  return todos.json();
}
type Todo = {
  id: string;
  name: string;
  isDone: boolean;
};



export default async function Home() {
  const { todos } = await getTodos();
  return (
    <>
      <div className="text-center">
        <h1 className="mt-2 text-3xl font-bold text-cyan-700">
          <span className="">
            Todo List App
          </span>
        </h1>
      </div>
      <div className="text-end mr-5">
        <AddNewToDo />
      </div>
      <ToDoList todos={todos} />
    </>
  )
}
