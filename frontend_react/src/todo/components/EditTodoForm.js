import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Input from '../../common/Input'
import Form from '../../common/Form'
import { editTodo, setTodoNotEdited } from '../../actions/todoActions'
import { setTitle, setDueDate, setDescription } from '../../actions/todoFormActions'
import './editTodoForm.scss'

function EditTodoForm({
    todo,
    todoValues,
    setTitle,
    setDueDate,
    setDescription,
    setTodoNotEdited,
    editTodo
}) {

    const [addTodoError, setAddTodoError] = useState('')

    useEffect(() => {
        setTitle(todo.title, true)
        setDescription(todo.description, true)
        setDueDate(todo.dueDate, true)
    }, [])

    const handleOnSubmit = async () => {
        const areInputsValid = Object.values(todoValues).every(input => input.isValid)
        if (areInputsValid) {
            editTodo(
                {
                    ...todo,
                    title: todoValues.title.value,
                    description: todoValues.description.value,
                    dueDate: todoValues.dueDate.value,
                    isEdited: false,
                    isMenuOppened:false,
                })
        }
        else {
            setAddTodoError('Fields required')
        }
    }

    return (
        <div className="editTodoForm">
            <Form
                name={'edit'}
                error={addTodoError}
                handleOnSubmit={handleOnSubmit}
                cancelAction={() => setTodoNotEdited(todo)}
                cancelButtonName={'cancel'}
            >
                <Input
                    minLength={1}
                    maxLength={25}
                    type={'text'}
                    name={'title'}
                    method={setTitle}
                    initialValue={todo.title}
                />
                <Input
                    type={'text'}
                    maxLength={50}
                    name={'description'}
                    method={setDescription}
                    initialValue={todo.description}
                />
                <Input
                    minLength={1}
                    type={'date'}
                    name={'dueDate'}
                    method={setDueDate}
                    initialValue={todo.dueDate}
                />
            </Form>
        </div>
    )
}

const mapStateToProps = (store) => {
    console.log(store.todoValues)
    return {
        todoValues: store.todoValues,
    }
}

export default connect(mapStateToProps, {
    editTodo,
    setTitle,
    setDueDate,
    setDescription,
    setTodoNotEdited
})
    (EditTodoForm)
