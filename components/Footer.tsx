import React from 'react';
import { AiFillGithub,  AiOutlineLinkedin,  } from 'react-icons/ai';

type Props = {}; // Define props type if necessary

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className="text-black flex flex-col  text-center py-4">
      <p className='font-bold '>&copy; 2024 E-commerce. All rights reserved.</p>
      <p> <p className="icons flex items-center justify-center text-4xl">
        <AiFillGithub />
        <AiOutlineLinkedin />
      </p>
      </p>
    </footer>
  );
};

export default Footer;
