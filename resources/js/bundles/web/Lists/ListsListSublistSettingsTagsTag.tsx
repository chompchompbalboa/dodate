//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'
import { ISublistTag } from '@/state/sublistTag/types'

import { deleteSublistTag } from '@/state/sublistTag/actions'

import Tag from '@/components/Tag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistSettingsTagsTag = ({
  sublistId,
  sublistTagId
}: IListsListSublistSettingsTagsTag) => {
  
  // Redux
  const dispatch = useDispatch()
  const tagId = useSelector((state: IAppState) => state.sublistTag.allSublistTags[sublistTagId]?.tagId)

  const handleDelete = () => {
    setTimeout(() => dispatch(deleteSublistTag(sublistId, sublistTagId)), 0)
  }
  
  return (
    <Tag
      tagId={tagId}
      handleDelete={handleDelete}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistSettingsTagsTag {
  sublistId: ISublist['id']
  sublistTagId: ISublistTag['id']
}

export default ListsListSublistSettingsTagsTag
