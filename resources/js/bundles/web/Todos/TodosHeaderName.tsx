//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { updateList } from '@/state/list/actions'
import { updateSublist } from '@/state/sublist/actions'
import { updateTag } from '@/state/tag/actions'

import ReactInputAutosize from 'react-input-autosize'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListName = ({
  listId,
  sublistId,
  isListOrSublist
}: ITodosHeaderListName) => {
  
  // Redux
  const dispatch = useDispatch()
  const activeListName = useSelector((state: IAppState) => isListOrSublist === 'LIST'
    ? state.list.allLists[listId]?.name
    : state.sublist.allSublists[sublistId]?.name
  )
  const sublistDefaultTagId = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.defaultTagId)
 
  // State
  const [ localActiveListName, setLocalActiveListName ] = useState(activeListName)
                                     
  // Update localActiveListName as needed
  useEffect(() => {
    if(activeListName !== localActiveListName) {
      setLocalActiveListName(activeListName)
    }
  }, [ activeListName ])
                               
  // Complete Editing
  const completeEditing = () => {
    if(activeListName !== localActiveListName) {
      if(isListOrSublist === 'LIST') {
        dispatch(updateList(listId, { name: localActiveListName }, { name: activeListName }))
       } else {
         dispatch(updateSublist(sublistId, { name: localActiveListName }, { name: activeListName }))
         if(sublistDefaultTagId && activeListName !== null) {
            dispatch(updateTag(sublistDefaultTagId, { text: localActiveListName }, { text: activeListName }))
         }
      }
    }
  }
                               
  // Handle Key Press
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      completeEditing()
    }
  }
  
  return (
    <ReactInputAutosize
      value={localActiveListName || ''}
      onBlur={completeEditing}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalActiveListName(e.target.value)}
      onKeyPress={handleKeyPress}
      inputStyle={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        marginRight: '0.25rem'
      }}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderListName {
  listId: IList['id']
  sublistId: ISublist['id']
  isListOrSublist: 'LIST' | 'SUBLIST'
}

export default TodosHeaderListName
