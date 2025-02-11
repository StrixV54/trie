import Modal from '@/shared/Modal'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useTaskStore } from '@/store/task'

const useHandleSubmit = (cb: () => void) => {


  const handleSubmit = (v: any) => {
    const randomId = `TASK-ID-RAND-${Date.now()}`

    cb()
    // addOneTask({
    //   ...v,
    //   ...{
    //     id: randomId
    //   }
    // })
  }

  return { handleSubmit }
}

export default function CalendarTaskCreate({ dueDate }: { dueDate: Date }) {
  const [visible, setVisible] = useState(false)
  const { handleSubmit } = useHandleSubmit(() => {
    setVisible(false)
  })

  return (
    <div>
      <Modal
        visible={visible}
        onVisibleChange={setVisible}
        title="Add a new task"
        triggerBy={
          <div>
            <AiOutlinePlus className="calendar-create-task " />
          </div>
        }
        content={
          <>
            <div className='text-white'>Wanna create</div>
          </>
        }
      />
    </div>
  )
}
