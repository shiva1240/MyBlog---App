import React from 'react'
import pic from '../../public/logo.png'
function Logo({width ='100px'}) {
  return (
    <div className='w-[46px] h-[46px]'>
      <img src={pic} alt="" />
    </div>
  )
}
 
export default Logo