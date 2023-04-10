import React from 'react'
import Todo from './Todo'
// Todo da yazılacak değerleri buradaki ul içerisinde tutacağız.
function TodoList({todos, setTodos, filteredTodos}) {
  return (
    <div>
        <div className='todo-container'>
        <ul className="todo-list">
            {/* 
            butona tıkladığımızda listeye eklemesi için yaptığımız işlem;
            todos map ile dönüyoruz . <Todo/> içine iste text'i yazıyoruz..
            biz id yi todostan alıcaz
             */}
            {filteredTodos.map((todo) =>( // filteredTodos map ile dönüce<
               <Todo
               text = {todo.text} // form içerisinde 15. de verdiğimiz text
               todo = {todo} // her bir list itemını görmek için
               key = {todo.id}
               todos = {todos}
               setTodos={setTodos}
               /> 
            ))}
        </ul></div>
        
    </div>
  )
}

export default TodoList