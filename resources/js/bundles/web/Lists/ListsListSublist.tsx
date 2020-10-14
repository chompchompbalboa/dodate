//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { updateActiveSublistId } from '@/state/active/actions'

import ListsListSublistName from '@web/Lists/ListsListSublistName'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublist = ({
  listId,
  sublistId
}: IListsListSublist) => {
  
  // Redux
  const dispatch = useDispatch()
  const isActiveSublist = useSelector((state: IAppState) => state.active.sublistId === sublistId)
  
  return (
    <Container
      isActiveSublist={isActiveSublist}
      onClick={() => dispatch(updateActiveSublistId(listId, sublistId))}>
      <ListsListSublistName
        listId={listId}
        sublistId={sublistId}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublist {
  listId: IList['id']
  sublistId: ISublist['id']
}
                               
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0.2rem;
  padding-left: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({ isActiveSublist }: IContainer ) => isActiveSublist ? 'rgb(245, 245, 250)' : 'transparent' };
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:hover {
    background-color: rgb(245, 245, 250);
  }
`
interface IContainer {
  isActiveSublist: boolean
}

export default ListsListSublist
