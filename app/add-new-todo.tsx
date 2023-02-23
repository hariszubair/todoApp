"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

async function addToDo(name: string, refresh: Function) {

    await fetch('/api/todo/add', {
        method: 'POST',
        body: JSON.stringify({ name })
    });
    refresh();
}

export default function AddNewToDo() {
    const router = useRouter();
    let [name, setName] = useState<string>("");
    return (
        <>
            <div className="flex justify-end">
                <div className="flex w-1/4">
                    <input type="text" placeholder="Add a task"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <button
                        className="py-2.5 px-2
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                        onClick={async () => {
                            await addToDo(name, router.refresh);
                            setName('')
                        }}>Add</button>
                </div>
            </div>
        </>

    );

}
