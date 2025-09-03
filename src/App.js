import './App.css';

function App() {
  return (
    <>
     <div className='header'>
      <h1>Todo App</h1>

    </div>

    <div className='todo-cards'>
              <input className='input-btn' type="text" placeholder='Add Task...' />


      <button className='add-task-btn'>


        <p> +Add Task</p>

      </button>

    </div>
    
    </>
   
  );
}

export default App;
