import React from 'react'

export const Login = () => {
    return (
        <div className='flex bg-[yellow] w-[100vw] h-[100vh] justify-center items-center'>
            <div className='w-[50vw] h-[50vh] bg-[red] rounded-[20px] text-center justify-around flex flex-col items-center'>
                <div className='w-[35vw] bg-[green] flex justify-between mb-[30px]'>
                    ID
                    <input type='' placeholder='ID' ></input>
                </div>
                <div className='w-[35vw] bg-[green] flex justify-between'>
                    PWD
                    <input type='password' placeholder='Password' ></input>
                </div>
                <div className='flex bg-[green] w-[30vw] justify-around'>
                    <div className='p-3 rounded-[10px] bg-[yellow]'>
                        Login
                    </div>
                    <div className='p-3 rounded-[10px] bg-[yellow]'>
                        Register
                    </div>
                </div>
            </div>
        </div>
    )
}
