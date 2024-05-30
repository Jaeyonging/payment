import React from 'react'

interface Props {
    title: string
    price: number
    descr?: string
    imageurl: string
}

export const FoodIntro = ({ title, price, descr = "이겻은 시원한 아메리카노요!!", imageurl }: Props) => {
    return (
        <>
            <img src={imageurl} className='w-[200px]' />
            <div className='flex flex-col bg-[yellow] rounded-[30px] p-[30px]'>
                <div className=' w-[50vw] title border-[black] border-2 rounded-[30px] pl-[20px]'>
                    이름
                </div>
                <div className='text-[25px]'>
                    {title}
                </div>
                <div className=' w-[50vw] title border-[black] border-2 rounded-[30px] pl-[20px]'>
                    가격
                </div>
                <div className='text-[25px]'>
                    {price}
                </div>
                <div className=' w-[50vw] title border-[black] border-2 rounded-[30px] pl-[20px]'>
                    설명
                </div>
                <div className='text-[25px]'>
                    {descr}
                </div>
            </div>
        </>
    )
}
