import { dateFormat } from '@/utils/date'
import { default as Tooltip } from '@/shared/Tooltip'

export default function Time({ date }: { date: Date }) {
  const time = dateFormat(date, 'Pp')
  const hour = dateFormat(date, 'HH:mm:ss aa')

  return (
    <Tooltip title={time}>
      <span className="activity-time">{hour}</span>
    </Tooltip>
  )
}
