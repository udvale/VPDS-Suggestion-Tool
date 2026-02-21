'use client';
import Image from 'next/image';

const Header = (): React.ReactElement => {
  return (
    <header className="z-50 px-4 py-2 shadow-md">
      <div className="flex items-center justify-between w-full p-3">
        {/* <div className="flex items-center gap-2">
          <Image
            src="/ner-cali.png"
            alt="NER Cali Logo"
            width={63}
            height={40}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div> */}
        <Image
          src="/Visa_Brandmark_White_RGB_2021.png"
          alt="Visa Logo"
          width={60}
          height={20}
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;

