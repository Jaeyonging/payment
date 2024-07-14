import React, { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLogin = () => {
    const navigate = useNavigate()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/admin")
    };

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {

    };

    const handlePwd = (e: ChangeEvent<HTMLInputElement>) => {

    };

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className='flex flex-col w-[70vw] h-[70vh] items-center justify-center shadow-lg'>
                <div className='text-[50px]'>
                    JSH Payment
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                    <div className='flex flex-col mb-4'>
                        Email
                        <input type='email' className='bg-[#a5a5a5] rounded-[10px] p-2 text-[white] placeholder-white w-[300px]' placeholder='Enter your email' onChange={handleEmail} />
                    </div>
                    <div className='flex flex-col mb-4'>
                        Password
                        <input type='password' className='bg-[#a5a5a5] rounded-[10px] p-2 text-[white] placeholder-white w-[300px]' placeholder='Enter your password' onChange={handlePwd} />
                    </div>
                    <button type='submit' className='rounded-[10px] p-2 bg-[gray] self-center hover:bg-[#bababa]'>Submit</button>
                </form>
            </div>
        </div>
    );
};
