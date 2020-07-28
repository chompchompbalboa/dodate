//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodoTag } from '@/state/todoTag/types'

import { deleteTodoTag } from '@/state/todoTag/actions'

import Tag from '@/components/Tag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTagsTagsTag = ({
  todoTagId
}: ITodoTagsTagsTag) => {
  
  // Redux
  const dispatch = useDispatch()
  const tagId = useSelector((state: IAppState) => state.todoTag.allTodoTags[todoTagId].tagId)

  return (
    <Tag
      tagId={tagId}
      handleDelete={() => dispatch(deleteTodoTag(todoTagId))}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTagsTagsTag {
  todoTagId: ITodoTag['id']
}

export default TodoTagsTagsTag
