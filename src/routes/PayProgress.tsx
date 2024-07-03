import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../assets/lottie/loading.json'
import Lottie from 'lottie-react'

export const PayProgress = () => {
    const { type } = useParams<{ type: string }>()
    console.log(type)
    return (
        <div className='flex justify-center items-center w-full h-[100vh]'>
            <Lottie animationData={Loading}></Lottie>
        </div>
    )
}
