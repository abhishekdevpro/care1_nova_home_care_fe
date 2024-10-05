import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-white text-gray-700 p-2 md:p-4 border-b-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="hidden md:flex items-center mb-2 md:mb-0 md:text-xl font-normal">
          <MdLocationOn className="text-blue-500 mr-2" />
          <span>1509 Lady St, Columbia, SC 29201, United States</span>
        </div>
        <div className='flex justify-between items-center gap-4'>
        {/* <div className="hidden md:flex text-xl font-normal items-center">
          <MdAccessTime className="text-blue-500 mr-2" />
          <span>Mon To Sat 9:00 AM to 8:00 PM</span>
        </div> */}
        <div className="flex space-x-4 mt-2 md:mt-0 text-xl font-normal">
          <FaFacebookF className=" cursor-pointer" />
          <FaTwitter className=" cursor-pointer" />
          <FaWhatsapp className=" cursor-pointer" />
          <FaInstagram className=" cursor-pointer" />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;