import { FaBars } from "react-icons/fa"
import Image from "./layer/Image"
import List from "./layer/List"
import ListItem from "./layer/Listitem"

const Navbar = () => {
  return (
    <>
    <nav className="bg-slate-300 ">
        <div className="relative max-w-container mx-auto px-3 md:px-0 py-8 flex items-center justify-between md:justify-start">
        <Image href="" src="../src/assets/logo.png" alt="logo.png"/>

          <List className='mx-auto gap-x-10 absolute left-0 top-full md:static flex-col md:flex-row bg-cyan-200 md:bg-transparent w-full md:w-auto p-5 md:p-0'>
            <ListItem active='text-active' listInnerItem='Home'/>
            <ListItem listInnerItem='Shop'/>
            <ListItem listInnerItem='About'/>
            <ListItem listInnerItem='Contacts'/>
            <ListItem listInnerItem='Journal'/>
          </List>
          <div>
            <FaBars className='md:hidden block' />
          </div>
          
        </div>
    </nav>
    </>
  )
}

export default Navbar