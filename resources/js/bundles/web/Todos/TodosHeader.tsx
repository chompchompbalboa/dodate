//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import TodosHeaderListActions from '@web/Todos/TodosHeaderListActions'
import TodosHeaderListName from '@web/Todos/TodosHeaderListName'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeader = ({
  listId
}: ITodosHeader) => {
  return (
      <Container>
        <TodosHeaderListName
          listId={listId}/>
        <TodosHeaderListActions
          listId={listId}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeader {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: flex-end;
  background-color: rgb(235, 235, 235);
`

export default TodosHeader
