"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

async function update(id: string, isDone: boolean) {

    await fetch('/api/todo/update', {
        method: 'POST',
        body: JSON.stringify({ id, isDone })
    });
}
async function deleteTodo(id: string, refresh: Function) {

    await fetch(`/api/todo/delete?id=${id}`, {
        method: 'DELETE',
    });
    refresh();
}


export default function ToDoListItem({ item, index }:
    {
        item:
        {
            id: string,
            name: string,
            isDone: boolean
        },
        index: number
    }
) {
    const [done, setDone] = useState<boolean>(item.isDone);
    const router = useRouter();

    return (
        <>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.name}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button onClick={(e) => {
                    update(item.id, !done);
                    setDone(!done);
                }} className={(!done ? "bg-green-400" : "bg-blue-400") + " py-2 px-4 rounded-lg mx-2"} >
                    {!done ? 'Mark as Done' : 'Undo the task'} </button>
                <button onClick={(e) => { deleteTodo(item.id, router.refresh) }} className="py-2 px-4 bg-red-400 rounded-lg">Delete</button>
            </td>
        </>
    );
}
