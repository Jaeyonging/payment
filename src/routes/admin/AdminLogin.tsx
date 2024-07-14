import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/configureStore';
import { Login, setEmail } from '../../store/userSlice';

export const AdminLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmailState] = useState("")
    const [pwd, setPwdState] = useState("")
    const [pwdError, setPwdError] = useState("")
    const [emailError, setEmailError] = useState("")
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let valid = true;

        if (!email.includes(".co") || !email.includes("@")) {
            setEmailError("이메일 형식으로 입력해주세요");
            valid = false;
        } else {
            setEmailError("");
        }

        if (pwd.length < 5) {
            setPwdError("패스워드는 5글자 이상입니다.");
            valid = false;
        } else {
            setPwdError("");
        }

        if (valid) {
            dispatch(setEmail(email));
            dispatch(Login())
            navigate("/admin");
        }
    };

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailState(e.target.value);
    };

    const handlePwd = (e: ChangeEvent<HTMLInputElement>) => {
        setPwdState(e.target.value)
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
                        <input className='bg-[#a5a5a5] rounded-[10px] p-2 text-[white] placeholder-white w-[300px]' placeholder='Enter your email' onChange={handleEmail} />
                        <div className='text-[red] text-[15px]'>
                            {emailError}
                        </div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        Password
                        <input type='password' className='bg-[#a5a5a5] rounded-[10px] p-2 text-[white] placeholder-white w-[300px]' placeholder='Enter your password' onChange={handlePwd} />
                        <div className='text-[red] text-[15px]'>
                            {pwdError}
                        </div>
                    </div>
                    <button type='submit' className='rounded-[10px] p-2 bg-[gray] self-center hover:bg-[#bababa]'>Submit</button>
                </form>
            </div>
        </div>
    );
};
