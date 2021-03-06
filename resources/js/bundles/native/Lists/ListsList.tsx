//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import ListsListCreateSublist from '@native/Lists/ListsListCreateSublist'
import ListsListName from '@native/Lists/ListsListName'
import ListsListSublist from '@native/Lists/ListsListSublist'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsList = ({
  listId,
  setIsListsVisible
}: IListsList) => {

  // Redux
  const sublists = useSelector((state: IAppState) => state.sublist.sublistsByListId[listId] || [])
  const isListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(listId))

  return (
    <Container>
      <ListsListName
        listId={listId}
        setIsListsVisible={setIsListsVisible}/>
      {isListLoaded &&
        <Sublists>
          {sublists.map(sublistId => (
            <ListsListSublist
              key={sublistId}
              listId={listId}
              sublistId={sublistId}
              setIsListsVisible={setIsListsVisible}/>
          ))}
          <ListsListCreateSublist
            listId={listId}/>
        </Sublists>
      }
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsList {
  listId: IList['id']
  setIsListsVisible(nextIsListsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin-bottom: 10px;
`

const Sublists = styled.View`
  display: flex;
  padding-left: 15px;
`

export default ListsList
