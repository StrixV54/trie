import { Draggable } from 'react-beautiful-dnd'
import CalTaskInMonth from './CalTaskInMonth'
import { ICalendarView, useCalendarContext } from '@/context/CalenderContext'
import CalTaskInWeek from './CalTaskInWeek'
import Link from 'next/link'

interface ICalMonthTaskProps {
  id: string
  link: string
  title: string
  type: any
  time: string
  assigneeId?: string
  taskStatusId?: string
  index: number
  classes?: Array<string>
}

export default function CalMonthTask({
  index,
  link,
  type: taskType,
  time,
  id,
  title,
  assigneeId,
  taskStatusId,
  classes = []
}: ICalMonthTaskProps) {
  const { calendarView } = useCalendarContext()

  const taskClasses = ['calendar-task-item']
  classes?.length && taskClasses.push(...classes)

  const view = () => (
      <Draggable draggableId={id} index={index}>
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="relative">
            <div className={taskClasses.join(' ')}>
              {calendarView === ICalendarView.WEEK ? (
                <CalTaskInWeek
                  type={taskType}
                  time={time}
                  // color={color}
                  title={title}
                  // assigneeId={assigneeId}
                />
              ) : (
                <CalTaskInMonth
                  type={taskType}
                  time={time}
                  // color={color}
                  title={title}
                  // assigneeId={assigneeId}
                />
              )}
            </div>
          </div>
        )}
      </Draggable>
    // <Link href={link}></Link>
  )

  return view()
}
