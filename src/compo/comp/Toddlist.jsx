import { useState } from "react"

export default function Toddlist() {
   const[todo,settodo] =useState("")
   const[todos,settodos] = useState([])

//    function addtodo
const addtodo = () =>{
    if(todo.trim()){
        // 할일을 추가하면 ,todos의 값을 추가
        settodos([...todos,todo])
        // todo상태를 초기화
        settodo("")
    }
}
   
    return (
        <>
            <h2>할일 목록</h2>
            <input type="text"
                value={todo}
                onChange={(e) => settodo(e.target.value)}
                placeholder="할일을 입력하삼" />
            <button onClick={addtodo}>추가</button>
            <ul>
                {
                    todos.map((item,index) =>(
                            <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}