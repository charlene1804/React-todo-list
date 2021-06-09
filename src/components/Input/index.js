import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({onNewTask}) => (
  <input
    className="new_task_input"
    type="text"
    placeholder="Ajouter une tâche"
    onKeyDown={(event) => {
      if (event.keyCode === 13) {
        const newTask = event.target.value;
        console.log('newTask :', newTask);
        onNewTask(newTask);
        event.target.value = '';
      }
    }}

  />
);

Input.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};

export default Input;
