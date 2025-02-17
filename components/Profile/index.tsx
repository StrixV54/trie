import Image from 'next/image'
import './style.css'
import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container flex gap-2'>
      <Image alt="profile" src="https://i.pravatar.cc/300" className='profile-pic size-8' width={40} height={40}/>
      <p className='profile-username'>Brianna Clinton</p>
    </div>
  )
}
