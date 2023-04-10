import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {

  // inputtaki değişimi tutması için;
  const [inputText , setInputText] = useState("")
  // listeyi tutmak için;
  const [todos, setTodos] = useState([])
  // all,completed,uncompleted görmek için
  const [status, setStatus] = useState("all") // form 35 value all ordan geliyor
  const [filteredTodos, setFilteredTodos] = useState([]);
// filterHandlerı çalıştırmak için
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  // burda seçtiğimiz değeri getirticek

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break
      default:
        setFilteredTodos(todos);
        break;
    }
  }
// LocalSorage
useEffect(() => {
  getLocalTodos();
}, [])

//! save to local
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]))
  } else {
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }
}


return (
    <div className="App">
      <header>
        <h1>MY TODOLIST</h1>
      </header>
      <Form 
      inputText={inputText} // bunları buraya yazmamız gerekiyor
      setInputText={setInputText} // bunları buraya yazmamız gerekiyor
      todos = {todos} // props olarak gönderiyoruz..
      setTodos = {setTodos} // props olarak gönderiyoruz..
      setStatus={setStatus}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
