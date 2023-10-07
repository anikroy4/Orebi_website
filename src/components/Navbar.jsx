import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import Image from "./layer/Image"
import List from "./layer/List"
import ListItem from "./layer/ListItem"


const Navbar = () => {

    const [show, setShow]=useState(true)

    useEffect(()=>{
      function resize()
      {
        if(window.innerWidth < 768){
          setShow(false)
        }
        else{
          setShow(true)
        }
      }
      resize()
      window.addEventListener("resize", resize)
      
    },[])
    let handleClick= () =>{
      setShow(!show)
    }


  return (
    <>
    <nav className="bg-white">
        <div className="relative max-w-container mx-auto px-3 md:px-0 py-8 flex items-center justify-between md:justify-start">
        <Image href="" src="../src/assets/logo.png" alt="logo.png"/>

          {show && (


          <List className='mx-auto gap-x-10 absolute left-0 top-full md:static flex-col md:flex-row bg-cyan-200 md:bg-transparent w-full md:w-auto p-5 md:p-0'>
            <ListItem active='text-active' listInnerItem='Home'/>
            <ListItem listInnerItem='Shop'/>
            <ListItem listInnerItem='About'/>
            <ListItem listInnerItem='Contacts'/>
            <ListItem listInnerItem='Journal'/>
          </List>
          )}
          <div>
            <FaBars className='md:hidden block' onClick={handleClick} />
          </div>
          
        </div>
    </nav>
    </>
  )
}

export default Navbar