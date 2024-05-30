import React from 'react';

interface FoodDetailProps {
    closeDetail: () => void;
}

export const FoodDetail = ({ closeDetail }: FoodDetailProps) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center w-[100vw] h-[100vh] bg-transparent z-50'>
            <div className='flex flex-col items-center w-[95vw] h-[95vh] bg-[gray]'>
                <button onClick={closeDetail} className='self-end top-4 right-4 text-black text-2xl mr-[10px]'>
                    X
                </button>
            </div>
        </div>
    );
};
