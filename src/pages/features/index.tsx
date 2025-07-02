import Head from '@/components/Feature/HeroSection'
import React from 'react'
import ParentalDashboard from '@/components/Feature/ParentalDashboard'
import Offerings from '@/components/Feature/Offerings'
import AgeGroups from '@/components/Feature/AgeGroups'
import ActivitiesMarquee from '@/components/Feature/ActivitiesMarquee'

const index = () => {
  return (
    <div className='min-h-screen'>
        <Head/>
        <AgeGroups/>
        <ActivitiesMarquee/>
        <Offerings/>
        <ParentalDashboard/>

    </div>
  )
}

export default index