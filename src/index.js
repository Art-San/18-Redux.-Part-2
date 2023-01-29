import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import {completeTask, titleChenge, taskDeleted, getTasks } from './store/task'
import configureStore from './store/store';
import { Provider, useSelector } from 'react-redux';



const store = configureStore()
const App = () => {
  const state = useSelector((state) => state)

  useEffect(() => {
    store.dispatch(getTasks())
  }, [])

 
  const changeTitle = (taskId) => {
    store.dispatch(titleChenge(taskId))
  }

  const deleteTask = (taskId) => {
    store.dispatch(taskDeleted(taskId))
  }

  return (
    <>
    <h1>App</h1>
    <ul>
      {state.map((el) => (
        <li key={el.id}>
          <p>{el.title}</p>
          <p> {`Comleted: ${el.completed}`}</p>
          <button onClick={() => store.dispatch(completeTask(el.id))}>
            Completed
          </button>
          <button onClick={() => changeTitle(el.id)}>
            Chsange Title
          </button>
          <button onClick={() => deleteTask(el.id)}>
            Delete
          </button>
          <hr/>
        </li>
      ))}
    </ul>
    </>
  )
  
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)