import { memo } from 'react'

function CalTaskInWeek({
  color,
  time,
  type,
  title,
  assigneeId
}: {
  color?: string
  time: string
  type: any
  title?: string
  assigneeId?: string
}) {
  return (
    <div className="py-2">
      <div
        className="absolute left-0 top-0 h-full w-[4px]"
        style={{ backgroundColor: color || '#444' }}></div>
      <div
        className="flex items-center justify-between gap-1 px-3"
        title={title}>
        <h2 className="dark:text-gray-400">
          {/* <TaskTypeIcon size="sm" type={type || ''} /> */}
          <span>{title}</span>
        </h2>
        <div className="">
          {/* <MemberAvatar noName={true} uid={assigneeId} /> */}
        </div>
      </div>
      <div className="px-3 text-xs text-gray-400 dark:text-gray-500">
        {time}
      </div>
    </div>
  )
}

export default memo(CalTaskInWeek)
