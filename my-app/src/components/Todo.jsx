import React from 'react'

function Todo({text, todos, setTodos, todo}) {
// silme işlemi için (silmelerde filter kullanıyoruz)
// setTodos ile tuttuğumuz için işlemleri setTodos içerisinde yapıyoruz

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        console.log(todos)
    }

// completed true yapma olayı;

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                ...item, completed: !item.completed // eğer true ise false yap false ise true yap
                }
            }
            return item
        }))
    }


  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`} >  {/*completed değiştirdiğimiz kısım */}
        <button className="complete-btn" onClick={completedHandler}>
            <i className="fas fa-check-circle"></i>
        </button>
       <li className="todo-item">{text}</li>    {/*texti buraya yazıyoruz burdan listeye ekliyor */}
        <button className="trash-btn" onClick={deleteHandler}>
            <i className="fa fa-minus-circle"></i>
        </button>
        </div>
  )
}

export default Todo