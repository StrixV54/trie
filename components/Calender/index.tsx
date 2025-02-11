"use client";
import CalMonthContainer from './CalMonthContainer'
import './style.css'
import { CalendarProvider, ICalendarView } from '@/context/CalenderContext'
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

export default function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth())
  const [calendarView, setCalendarView] = useState<ICalendarView>(ICalendarView.MONTH)
  const d = new Date()
  const date = new Date(d.getFullYear(), month, 15)

  return (
    <div>
      <CalendarProvider value={{
        month,
        setMonth,
        calendarView,
        setCalendarView
      }}>
        <CalMonthContainer date={date} type={calendarView} />
      </CalendarProvider>
    </div>
  )
}
