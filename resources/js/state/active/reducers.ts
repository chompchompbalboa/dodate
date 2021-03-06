//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'

import { IUserActive } from '@/state/active/types'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ITodo } from '@/state/todo/types'

import { 
  IActiveActions,
  CLEAR_STATE,
  LOAD_ACTIVE,
  UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE,
  UPDATE_ACTIVE_IS_TODO_TAGS_VISIBLE,
  UPDATE_ACTIVE_LIST_ID,
  UPDATE_ACTIVE_SUBLIST_ID,
  UPDATE_ACTIVE_TODO_ID
} from '@/state/active/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialActiveData = typeof initialData !== 'undefined' ? initialData.active : defaultInitialData.active
export type IActiveState = {
  id: IUserActive['id']
  listId: IList['id']
  sublistId: ISublist['id']
  todoId: ITodo['id']
  isCompletedTodosVisible: boolean
  isTodoTagsVisible: boolean
}

export const initialState: IActiveState = {
  id: initialActiveData.id,
  listId: initialActiveData.listId,
  sublistId: initialActiveData.sublistId,
  todoId: null,
  isCompletedTodosVisible: initialActiveData.isCompletedTodosVisible,
  isTodoTagsVisible: false
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const active = (state = initialState, action: IActiveActions): IActiveState => {
	switch (action.type) {

    case CLEAR_STATE: {
      return {
        id: null,
        listId: null,
        sublistId: null,
        todoId: null,
        isCompletedTodosVisible: null,
        isTodoTagsVisible: false
      }
    }

    case LOAD_ACTIVE: {
      const { nextActive } = action
      return {
        ...nextActive,
        todoId: null
      }
    }

    case UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE: {
      const { nextActiveIsCompletedTodosVisible } = action
      return {
        ...state,
        isCompletedTodosVisible: nextActiveIsCompletedTodosVisible
      }
    }

    case UPDATE_ACTIVE_IS_TODO_TAGS_VISIBLE: {
      const { nextActiveIsTodoTagsVisible } = action
      return {
        ...state,
        isTodoTagsVisible: nextActiveIsTodoTagsVisible
      }
    }

    case UPDATE_ACTIVE_LIST_ID: {
      const { nextActiveListId } = action
      return {
        ...state,
        listId: nextActiveListId,
        sublistId: null
      }
    }

    case UPDATE_ACTIVE_SUBLIST_ID: {
      const { nextActiveListId, nextActiveSublistId } = action
      return {
        ...state,
        listId: nextActiveListId,
        sublistId: nextActiveSublistId
      }
    }

    case UPDATE_ACTIVE_TODO_ID: {
      const { nextActiveTodoId } = action
      return {
        ...state,
        todoId: nextActiveTodoId
      }
    }

		default:
			return state
	}
}

export default active
