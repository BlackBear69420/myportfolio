import { Dipeat } from '@/Cards/Dipeat'
import { Password } from '@/Cards/Password'
import { Restaurant } from '@/Cards/Restaurant'
import { ThreeDCardDemo } from '@/Cards/ThreeDCardDemo'
import { TvShow } from '@/Cards/TvShow'
import { UserInfo } from '@/Cards/UserInfo'
import Bounded from '@/components/Bounded'
import React from 'react'

function page() {
  return (
    <Bounded>
      <div className=' flex md:gap-8 flex-wrap items-center justify-center'>
      <ThreeDCardDemo/>
      <Restaurant/>
      <TvShow/>
      <Dipeat/>
      <UserInfo/>
      <Password/>
    </div>
    </Bounded>

  )
}

export default page