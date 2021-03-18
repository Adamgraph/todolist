import React from 'react';
import PropTypes from 'prop-types';
import './ToDoForm.css';

/*here is the function insert with add that new items*/
function ToDoForm({ addItem, updateInput, todo }) {
  return (
    <form className="todo-form" onSubmit={(e) => addItem(e, todo)}>
      <label htmlFor="todo">NEW DO*</label>
      <input
        id="todo"
        name="todo"
        onChange={updateInput}
        required
        type="text"
        value={todo}
      />
      <button type="submit">ADD ThaT</button>
    </form>
  );
}

ToDoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired
};
/*to export the js*/
export default ToDoForm;

