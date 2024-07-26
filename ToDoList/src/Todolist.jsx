import { useState, useEffect } from "react";
function ToDoList(){
    const [input, setInput] = useState("");
    const [todos, toDoList] = useState([]);

    const handleInput = (event) => {
        
        setInput(event.target.value);
    }
    const addToDoList = (e) => {
        e.preventDefault();
        input!== "" && todos.push(input);
        setInput("");

    }
    const removeToDo = (e) => {
        let elementRemove = e.target.parentElement.children[0].textContent;
        toDoList(todos.filter((todo) => todo !== elementRemove));

    }
    return (
        <>
            <div className="bg-[#fcfff3] p-12">
                <form className="flex justify-around items-center">
                    <input type="text" value={input} onChange={handleInput}
                    className="bg-[#f5f9eb] h-10 w-[300px] mr-3 outline-none p-3" />
                    <button onClick={addToDoList} 
                    className="bg-slate-800 hover:bg-slate-500 duration-500 ease-linear text-white px-5 py-2 rounded-3xl"
                    type="submit">Submit</button>
                </form>

                <ul className="mt-10">
                    {todos.map((todo) =>(
                        <div
                        className="flex justify-between 
                        items-center px-4 text-lg py-2 my-2 w-[400px] bg-[#f5f9eb]">
                            <li key={Math.random}>{todo}</li>
                            <button onClick={removeToDo}
                            className="bg-slate-800 hover:bg-slate-500 duration-500 ease-linear px-3 text-white rounded-full"
                            >X</button>
                        </div>
                        
                    ))}
                </ul>
            </div>
        </>
    )
    
}
export default ToDoList;