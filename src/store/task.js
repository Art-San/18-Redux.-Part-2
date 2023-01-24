const TASK_UPDATED = 'task/updated'
const TASK_DELETED = 'task/deleted'

export function taskComplete(id) {
    return {
        type: TASK_UPDATED,
        payload: { id, completed: true}
    }
}

export function titleChenge(id) {
    return {
        type: TASK_UPDATED,
        payload: { id, title: `New title for ${id}`}
    }
}

export function taskDeleted(id) {
    return {
        type: TASK_DELETED,
        payload: { id }
    }
}

function taskReduser(state = [], action) {
    switch (action.type) {
        case TASK_UPDATED: {
          const newArray = [...state]
        const elementIndex = newArray.findIndex(
          (el) => el.id === action.payload.id
          )
          newArray[elementIndex] = {...newArray[elementIndex], ...action.payload}
          return newArray
        }
        case TASK_DELETED: {
            return state.filter((el) => el.id !== action.payload.id)
        }
        
      default:
        return state
    }
    
  }

export default taskReduser