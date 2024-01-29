import { createContext,useContext } from "react";
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:flase,
        }
    ],
    addTodo:(todo)=>{

    },
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{

    },
    toggleCompleted:(id)=>{}

});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider