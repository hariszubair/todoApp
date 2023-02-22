import AddNewToDo from "./add-new-todo";
import ToDoList from "./todo-list";

export default function Home() {
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
      <ToDoList />
    </>
  )
}
