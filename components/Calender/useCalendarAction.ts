import { DropResult } from 'react-beautiful-dnd'

export default function useCalendarAction() {
  const onDragEnd = (result: DropResult) => {
    const dropId = result.destination?.droppableId
    const taskId = result.draggableId
    if (!dropId) return

    const newDate = new Date(dropId)
    newDate.setHours(23)

    console.log(dropId)
    console.log(newDate)

    console.log({
      id: taskId,
      dueDate: newDate,
    })
  }

  return {
    onDragEnd,
  }
}
