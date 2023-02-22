import ToDoListItem from "./todo-list-item";

type Todo = {
    id: string;
    name: string;
    isDone: boolean;
};
export default function ToDoList({ todos }:
    {
        todos: Todo[]
    }) {
    return (
        <div className="flex justify-center bg-stone-100 p-2 rounded-lg m-5">
            <div className="w-full">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                #
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Task
                                            </th>
                                            <th scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todos.map((list: Todo, index: number) => {
                                            return (
                                                <tr className={index % 2 == 0 ? 'bg-gray-100 border-b' : 'bg-white border-b'}>
                                                    <ToDoListItem item={list} index={index} />
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
