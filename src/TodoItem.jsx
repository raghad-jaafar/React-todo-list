

export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
return(
<li>  {/*must have a unique key id*/}
 <label>
      <input 
       type="checkbox" 
       checked={completed}
       onChange={e => toggleTodo(id, e.target.checked)} 
     /> 
     {title}
    </label>
    <button onClick={()=>deleteTodo(id)} className="btn btn-Danger">
      Delete 
    </button>
 </li>
)
}

