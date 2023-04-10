import React, { useState } from 'react'

function Form({ inputText , setInputText , todos , setTodos , setStatus }) {

  // alertleri tutmak için
  const [alertWarning, setAlertWarning] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState(false)

  // inputa yazılan değeri tutmak için;
    const inputTextHandler = (e) => {
      setInputText(e.target.value)
    }
  
  // buttona tıkladığımızda sayfanın yenilenmemesi için;(sonra buttona onclick ile veriyoruz..)
    const subtmitTodoHandle = (e) => {
      e.preventDefault();
      // warning ve success mesajları için;
      const isEmpty = str => !str.trim().length;
      if(isEmpty(inputText)) {
        setAlertWarning(true);
        setTimeout(() => {
          setAlertWarning(false)
        },1000)
      }else {
        setAlertSuccess(true)
        setTimeout(() => {
          setAlertSuccess(false)
        }, 1000);
        setTodos([
          ...todos,
          {text: inputText, completed: false, id: Math.random()}
        ]);
      }
      //değişikliği sağlamak için listeye dizi olarak eklemesi için;
      //completed false ise normal true ise üstünü çiz yapacağız
      setTodos([
        ...todos,
        {text: inputText, completed: false, id: Math.random()}
      ]);
      // yazdıktan sonra inputu boşaltmak için tekrardan setinputa boş string oluşturuyoruz
      console.log(todos)
      setInputText("")
    }

    const statusHandler = (e) => {
      setStatus(e.target.value)
    }
  
  

  return (
    <form>
       <div className="search">
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add..."/>
            <button onClick={subtmitTodoHandle} className="todo-button" type="submit">
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <div className="alert-wrapper">
                {alertWarning ? <div className="alert-warning">
                    <div>Input alanı boş geçilemez!</div>
                </div> : ""}
                {alertSuccess ? <div className="alert-success">
                    <div>Ekleme Başarılı.</div>
                </div> : ""}
            </div>
        </form>
    )
}

export default Form