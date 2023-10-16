import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Flex from './layer/Flex'
import Image from './layer/Image'
import List from './layer/List'
import ListItem from './layer/ListItem'

const Searchbar = () => {
  return (
    <>
        <div className='bg-[#F5F5F3] md:py-6 py-0 md:border border-[#979797] border-0 pt-3 '>
            <div className='max-w-container mx-auto flex justify-between items-center flex-wrap md:flex-nowrap md:pb-0 pb-4 px-3 md:px-0'>
                <div className='relative md:order-1 order-2'>
                    <Flex className=' items-center gap-x-[10px] '>
                    <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626"/>
                    <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626"/>
                    </svg>
                    <p className='font-DM text-sm text-[#262626]'>Shop by Category</p>
                    </Flex>
                    <div className='invisible opacity-0 category w-[263px] bg-slate-500 absolute top-full translate-y-6 left-0'>
                    <List className="flex-col">
                        <ListItem listLiClassName=' bg-[#262626]  border-b border-[#2D2D2D]  ' className="py-4 px-5text-[rgba(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem='Accessories'/>
                        <ListItem listLiClassName=' bg-[#262626]  border-b border-[#2D2D2D]  ' className="py-4 px-5text-[rgba(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem='Furniture'/>
                        <ListItem listLiClassName=' bg-[#262626]  border-b border-[#2D2D2D]  ' className="py-4 px-5text-[rgba(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem='Electronics'/>
                        <ListItem listLiClassName=' bg-[#262626]  border-b border-[#2D2D2D]  ' className="py-4 px-5text-[rgba(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem='Clothes'/>
                        <ListItem listLiClassName=' bg-[#262626]  border-b border-[#2D2D2D]  ' className="py-4 px-5text-[rgba(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem='Bags'/>
                        <ListItem listLiClassName=' bg-[#262626]  border-b border-[#2D2D2D]  ' className="py-4 px-5text-[rgba(255,255,255,0.7)] w-full hover:text-[#fff] hover:ml-3" listInnerItem='Home appliances'/>
                
                    </List>
                    </div>
                </div>
                <div className='relative w-full md:w-auto md:order-2 order-1 md:mb-0 mb-4'>
                    <input className='md:w-[601px]  w-full py-4 px-5 outline-none bg-white' type='search' placeholder='Search Products'/>
                    <FaSearch className='absolute right-5 top-1/2 translate-y-[-50%] '/>
                </div>
                <Flex className="gap-x-10 md:order-3 order-3">
                    <Flex className='relative'>
                         <Flex className="gap-x-[10px]" >
                            <FaUser/>
                            <AiFillCaretDown/>
                        </Flex>
                        <div className='opacity-0 invisible absolute translate-y-4 top-full right-0'>
                            <List className='flex-col w-[200px]'>
                                <ListItem className='py-4 text-center border border-transparent hover:border-[#F0F0F0] text-white bg-[#2B2B2B] hover:bg-white hover:text-black' listInnerItem='My Account' />
                                <ListItem className='py-4 text-center border border-transparent hover:border-[#F0F0F0] text-white bg-[#2B2B2B] hover:bg-white hover:text-black' listInnerItem='Log out'/>
                            </List>
                        </div>
                    </Flex>
                   
                    <div className='relative '>
                        <FaShoppingCart/>
                        <div className='absolute top-full right-0 translate-y-4'>
                            <Flex className='w-[358px] items-center justify-between p-5 '>
                                <Flex className='gap-x-5 ite'>
                                    <div className='w-20 h-20 '>
                                        <Image className='w-full h-full' src="src\assets\cart_image.jpg"/>
                                    </div>
                                    <div>
                                        <h4>Black Smart Watch</h4>                                        <p>$44.00</p>
                                    </div>
                                </Flex>
                                <ImCross/>
                            </Flex>
                            <Flex className='w-[358px]  p-5 '>
                                <p>subtotal: <span>$44.00</span></p>
                                <div>
                                    <a href="#">view Cart</a>
                                    <a href="#">Checkourt</a>
                                </div>
                            </Flex>
                        </div>
                    </div>
                </Flex>
            </div>
        </div>
    </>
  )
}

export default Searchbar