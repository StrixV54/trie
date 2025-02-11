import Profile from '@/components/Profile'
import Calender from '@/components/Calender'
import { default as TinyCalender } from '@/components/Common/Calendar'

export default function Home() {
  return (
    <div className="app-body">
      <aside className="header-sidebar">
        <Profile />
        <div className="tiny-calender-container">
          <TinyCalender date={new Date()}>{(day: Date) => <div>-</div>}</TinyCalender>
        </div>
      </aside>
      <main className="main-body">
        <div className='w-full'>
          <Calender />
        </div>
      </main>
    </div>
  )
}
