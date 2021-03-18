import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './ToDoForm';
import './ToDo.css';

function ToDo({ name }) {
  const [todo, setTodo] = useState('');
  const [items, setItems] = useState([   /*here are the four visible list items*/
    {
      name: 'new Item: faster speed level'
    },
    {
      name: 'anything else'    
    },
    {
      name: 'Laser is not working'
    },
    {
      name: 'ventilation modernisation'
    }
  ]);

  function addItem(e, value) { /* in this function you can start the entered list items*/
    e.preventDefault();

    if (value !== '') {
      setItems([...items, { name: value }]);
      setTodo('');
    }
  }

  function updateInput(e) {
    setTodo(e.target.value);
  }

  function removeItem(index) {
    const newList = [...items];

    newList.splice(index, 1);
    setItems(newList);
  }

  function updateStatus(item, index) {
    const newItem = {
      ...item   
    };

    const newList = [...items];

    newList[index] = newItem;
    setItems(newList);
  }
/* here in return is html for structure*/
  return (
    <div className="todo-container">
      <h1>{name}</h1>
      <h2>"to do*" list on my Starship</h2>
      <hr />
      <h4></h4>
      <h5>(click to terminate the Do*)</h5>
      <ul>
        {items.map((item, index) => (
          <li key={index + item}>
            <div
              className={`name`}
              onClick={() => updateStatus(item, index)}
            >
              {item.name}
            </div>
            <button className="remove-button" onClick={() => removeItem(index)}>
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <TodoForm addItem={addItem} updateInput={updateInput} todo={todo} />
    </div>
  );
}

ToDo.defaultProps = {
  name: 'ToDo-List for my Starship'
};

ToDo.propTypes = {
  name: PropTypes.string.isRequired
};

export default ToDo;

