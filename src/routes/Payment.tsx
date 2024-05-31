import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { selectTotalPrice } from '../store/itemSlice';
import { PaymentCardView } from '../components/PaymentCardView';
import { IconBar } from '../components/IconBar';

export const Payment = () => {
    const itemState = useSelector((state: RootState) => state.item);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <div className='flex flex-col w-full p-10 justify-around h-[100vh] sm:p-[10px]'>
            <IconBar url='/menu' />
            <div className='flex flex-col justify-around teduri p-10 rounded-[20px] sm:p-[10px]'>
                <div className='text-[30px] text-[gray] font-bold mb-[20px] sm:mb-[5px] sm:text-[20px]'>
                    결제방법
                </div>
                <div className='flex flex-row justify-around text-center'>
                    <PaymentCardView title='카카오페이' imageurl='../pay/kakaopay.jpeg' />
                    <PaymentCardView title='네이버페이' imageurl='../pay/naverpay.jpeg' />
                    <PaymentCardView title='카드 결제' imageurl='../pay/cardpay.png' teduri={true} />

                </div>
            </div>
            <div className='flex flex-col justify-around teduri p-10 mt-[20px] rounded-[20px] sm:p-[10px]'>
                <div className='text-[30px] text-[gray] font-bold mb-[20px] sm:text-[20px]'>
                    통신사 할인
                </div>
                <div className='flex flex-row justify-around text-center'>
                    <PaymentCardView title='LG' imageurl='../membership/lg.svg' teduri={true} />
                    <PaymentCardView title='KT' imageurl='../membership/kt.svg' teduri={true} />
                    <PaymentCardView title='SKT' imageurl='../membership/tworld.svg' teduri={true} />
                </div>
            </div>
            <div className='flex flex-col justify-around teduri p-10 mt-[20px] rounded-[20px] sm:p-[10px]'>
                <div className='text-[30px] text-[gray] font-bold mb-[20px] sm:text-[20px]'>
                    주문내역
                </div>
                {
                    itemState.foods.length > 0 && (
                        <div className='flex flex-col teduri rounded-[10px] p-[20px] text-[20px] sm:p-[10px] sm:text-[10px]'>
                            {itemState.foods.map((food: any, index: number) => (
                                <div key={index} className='flex flex-row justify-around text-center border-b-2 border-[gray] mb-[20px]'>
                                    <div className='w-[20vw] break-keep '>
                                        {food.name}
                                    </div>
                                    <div>
                                        {food.count}
                                    </div>
                                    {food.options.map((option: any, index: number) => (
                                        <div key={index} className='flex-row flex'>
                                            <div>
                                                {option.optitle}: {option.opdesc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )
                }
                <div className=' self-end mt-[20px] text-[30px] font-bold sm:text-[20px]'>
                    가격: {totalPrice}

                </div>
            </div>
        </div>
    )
}
