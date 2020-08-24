//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { ITodo } from '@/state/todo/types'

import TodosTodoCompleted from '@native/Todos/TodosTodoCompleted'
import TodosTodoOpenTodoButton from '@native/Todos/TodosTodoOpenTodoButton'
import TodosTodoText from '@native/Todos/TodosTodoText'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosTodo = ({
  todoId,
  setIsTodoVisible
}: ITodosTodo) => {
  return (
    <Container>
      <TodosTodoCompleted
        todoId={todoId}/>
      <TodosTodoText
        todoId={todoId}/>
      <TodosTodoOpenTodoButton
        todoId={todoId}
        setIsTodoVisible={setIsTodoVisible}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodo {
  todoId: ITodo['id']
  setIsTodoVisible(nextIsTodoVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default TodosTodo
