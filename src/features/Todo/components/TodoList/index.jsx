import React from 'react';
import PropTypes from 'prop-types';
import todoModule from './todo.module.scss';
import classname from 'classnames/bind';
let cx = classname.bind(todoModule);

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }
    return (
        <ul className={cx('todo__list')}>
            {todoList.map((todo, idx) => (
                <li key={todo.id}
                    className={cx({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}</li>
                // <li key={todo.id}
                //     className={classname({
                //         'todo-item': true,
                //         completed: todo.status === 'completed'
                //     })}>
                //     {todo.title}</li>
            ))
            }
        </ul >
    );
}

export default TodoList;