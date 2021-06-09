import React from 'react';
import PropTypes from 'prop-types';

import './list.scss';

const List = ({ listOfTasks }) => (
  <ul className="listOfTasks">
    {
    listOfTasks.map((task) => (
      <li className="listOfTasks__item" key={task.id} done={task.done.toString()}>
        {task.label}
      </li>
    ))
      }
  </ul>
);

List.propTypes = {
  listOfTasks: PropTypes.array.isRequired,
};

export default List;
