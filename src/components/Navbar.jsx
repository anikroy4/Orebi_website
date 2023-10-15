import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import Image from './layer/Image'
import List from './layer/List'
import ListItem from './layer/ListItem'


const Navbar = () => {
    useEffect (()=>{

      function navToggle(){
        let navList = document.querySelector(".navList")
        navList.classList.toggle("show")
      }



      let navBtn = document.querySelector(".navBtn")
      navBtn.addEventListener("click", ()=>{
        console.log(ok);
      } )

    },[])
  

  return (
    <>
    <nav className="bg-white">
        <div className="relative max-w-container mx-auto px-3 md:px-0 py-8 flex items-center justify-between md:justify-start">
        <Image href="" src="../src/assets/logo.png" alt="logo.png"/>

         
          <List className='navList mx-auto gap-x-10 absolute md:opacity-100 left-0 top-full z-10 md:static flex-col md:flex-row bg-cyan-200 md:bg-transparent w-full md:w-auto p-5 md:p-0'>
            <ListItem className="text-[#767676] hover:text-active" active='text-active' listInnerItem='Home'/>
            <ListItem className="text-[#767676] hover:text-active" listInnerItem='Shop'/>
            <ListItem className="text-[#767676] hover:text-active" listInnerItem='About'/>
            <ListItem className="text-[#767676] hover:text-active" listInnerItem='Contacts'/>
            <ListItem className="text-[#767676] hover:text-active" listInnerItem='Journal'/>
          </List>
          
          <div>
            <FaBars className='navBtn md:hidden block' />
          </div>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar