import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

interface Props {
    isOpen: boolean
    setOpen: (value: boolean) => void
}

export const SideMenu = ({ isOpen, setOpen }: Props) => {
    const navigate = useNavigate()
    const userState = useSelector((state: RootState) => state.user);

    const xOnClicked = () => {
        setOpen(false)
    }


    const [isDetailOpen, setDetailOpen] = useState("")
    const detailMenu = (menu: string) => {
        setDetailOpen(menu)
    }
    return (
        <>
            <div className={`fixed w-[30vw] sm:w-[50vw] bg-[white] h-[100vh] shadow-black shadow-xl flex flex-col transition-left duration-500 z-50 ${isOpen ? 'left-0 top-0' : 'left-[-50vw] top-0'}`}>
                <div className='absolute right-0 text-[40px]'>
                    <IoCloseSharp onClick={xOnClicked} className='cursor-pointer' />
                </div>
                <div className='bg-[white] w-[30vw] sm:w-[50vw] h-[20vh] flex flex-col text-[20px] justify-between p-[10px] rounded-[20px] shadow-sm shadow-black sm:text-[13px]'>
                    <div>
                        ID: <a className='text-[red] underline'>{userState.email}</a>
                    </div>
                    <div>
                        Nickname: <a className='text-[red] underline'>{userState.username}</a>
                    </div>
                    <div>
                        Kiosk number:<a className='text-[red] underline'>{userState.kiosk.toString()}</a>
                    </div>
                </div>
                <div className='flex w-[30vw] sm:w-[50vw] h-[80vh] flex-col mt-[10px]'>
                    <div className='flex flex-col mt-[10vh]'>
                        <div className='flex flex-row sm:text-[20px]'>
                            상품 등록{
                                isDetailOpen == "products" ? <IoIosArrowUp className='mt-[10px] cursor-pointer sm:mt-[5px]' onClick={() => setDetailOpen("")} /> : <IoIosArrowDown className='mt-[10px] cursor-pointer sm:mt-[5px]' onClick={() => setDetailOpen("products")} />
                            }
                        </div>
                        {isDetailOpen == "products" &&
                            <div>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("products")}>
                                        음료 등록
                                    </span>
                                </div>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("options")}>
                                        옵션 등록
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row mt-[10vh] sm:text-[20px]'>
                            매출 현황{
                                isDetailOpen == "sales" ? <IoIosArrowUp className='mt-[10px] cursor-pointer sm:mt-[5px]' onClick={() => setDetailOpen("")} /> : <IoIosArrowDown className='mt-[10px] cursor-pointer sm:mt-[5px]' onClick={() => setDetailOpen("sales")} />
                            }
                        </div>
                        {isDetailOpen == "sales" &&
                            <>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("totalsales")}>종합 매출</span>
                                </div>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("cardsales")}>카드 매출</span>
                                </div>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("paysales")}>페이 매출</span>
                                </div>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("papersales")}>상품권 매출</span>
                                </div>
                            </>
                        }
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row mt-[10vh] sm:text-[20px]'>
                            키오스크 등록{
                                isDetailOpen == "kiosks" ? <IoIosArrowUp className='mt-[10px] cursor-pointer sm:mt-[5px]' onClick={() => setDetailOpen("")} /> : <IoIosArrowDown className='mt-[10px] cursor-pointer sm:mt-[5px]' onClick={() => setDetailOpen("kiosks")} />
                            }
                        </div>
                        {isDetailOpen == "kiosks" &&
                            <>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("kiosk")}>키오스크 등록</span>
                                </div>
                                <div className='text-[20px] sm:text-[15px]'>
                                    <span className='cursor-pointer' onClick={() => navigate("qr")}>QR 등록</span>
                                </div>
                            </>
                        }
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row mt-[10vh] sm:text-[20px]' onClick={() => navigate("login")}>
                            <span className='cursor-pointer' onClick={() => navigate("login")}>로그아웃</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
