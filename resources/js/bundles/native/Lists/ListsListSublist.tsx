//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import ListsListSublistName from '@native/Lists/ListsListSublistName'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsListSublist = ({
  listId,
  sublistId,
  setIsListsVisible
}: IListsListSublist) => {

  return (
    <Container>
      <ListsListSublistName
        listId={listId}
        sublistId={sublistId}
        setIsListsVisible={setIsListsVisible}/>
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublist {
  listId: IList['id']
  sublistId: ISublist['id']
  setIsListsVisible(nextIsListsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View``

export default ListsListSublist
