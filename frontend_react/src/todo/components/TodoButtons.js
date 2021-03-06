import React from 'react';
import { connect } from 'react-redux'
import TodoButton from './TodoButton'
import { setTodoDone, deleteTodoReq, setTodoAsEdited } from '../../actions/todoActions'
import { setShow } from '../../actions/hideComponentActions'
import './todoButtons.scss'

function TodoButtons({
    setTodoDone,
    deleteTodoReq,
    setTodoAsEdited,
    todo
}) {

    const buttons = [
        {
            buttonName: 'doneButton',
            img: '/images/checkbox.png',
            method: () => setTodoDone(todo),
        },
        {
            buttonName: 'deleteButton',
            img: '/images/deleteButton2.png',
            method: () => deleteTodoReq(todo),
        },
        {
            buttonName: 'editButton',
            img: '/images/edit.png',
            method: () => setTodoAsEdited(todo)
        },
        {
            buttonName: 'shareButton',
            img: '/images/share.png',
            method: () => ""
        },
    ]

    return (
        < div className="todoButtons" >
            { buttons.map(button =>
                !todo.isDone ?
                    <TodoButton
                        buttonName={button.buttonName}
                        img={button.img}
                        buttonAction={button.method}
                    />
                    : button.buttonName === 'deleteButton' &&
                    <TodoButton
                        buttonName={buttons.buttonName}
                        img={button.img}
                        buttonAction={button.method}
                    />
            )}
        </div >
    )
}

export default connect(
    null,
    {
        setTodoDone,
        deleteTodoReq,
        setShow,
        setTodoAsEdited
    })
    (TodoButtons)
