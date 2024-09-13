import React, { useState, useRef } from 'react';
import './index.css';
import myimg from './assets/images/Vector.png';
import myimg2 from './assets/images/frame.png';

const Homepage = () => {
  const [images, setImages] = useState([
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFpJTz5fkc0KB2S0BWBMbUOzyMtsxBWv4jf9g0MkR2VGSolhTc',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFpJTz5fkc0KB2S0BWBMbUOzyMtsxBWv4jf9g0MkR2VGSolhTc',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFpJTz5fkc0KB2S0BWBMbUOzyMtsxBWv4jf9g0MkR2VGSolhTc',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFpJTz5fkc0KB2S0BWBMbUOzyMtsxBWv4jf9g0MkR2VGSolhTc'
  ]);
  const [leftPositions, setLeftPositions] = useState([-19, 192, 403, 614]);
  const imageContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  const [topText, setTopText] = useState("Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Clara for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...");
  const [activeButton, setActiveButton] = useState('About Me');

  const buttonTexts = {
    "About Me": "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Clara for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
    "Experiences": "I have 5 years of experience in sales and have been working at Salesforce for the past 3 years. I've been able to close 50 deals in the past 6 months, and I'm looking forward to closing more deals in the future. I have a Bachelor's degree in Computer Science from the University of California, Berkeley. I've also...",
    "Recommended": "I recommend our Salesforce CRM as it is designed to improve customer relations, streamline processes, and drive growth for your business."
  };

  const handleTopButtonClick = (buttonName) => {
    setTopText(buttonTexts[buttonName]);
    setActiveButton(buttonName);
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
        setLeftPositions([...leftPositions, leftPositions[leftPositions.length - 1] + 211]); // Adjust increment as needed
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  const handlePrevImage = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: -221,
        behavior: 'smooth'
      });
    }
  };

  const handleNextImage = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 221,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen p-4 relative ">
      {/* Left Section */}
      <div className="hidden lg:block absolute w-[836px] h-[689px] top-[96px] left-[29px] gap-0 rounded-[27px] border border-[#96BEE7]  bg-[#616161D1]" />

      {/* Right Section */}
      <div className="flex flex-col justify-between bg-[#363C43] p-4 mb-4 w-full lg:w-[720px] h-[316px] top-[96px] lg:left-[922px] rounded-[18.89px] gap-0 absolute" 
      />

      {/* Top Buttons */}
      <div className="flex w-full lg:w-[614px] h-[62px] top-[113px] lg:left-[975px] rounded-[23px] mb-2 bg-black absolute" />
      <div className="flex w-full lg:w-[597px] h-[49px] top-[119px] lg:left-[981px] gap-[6px] absolute">
        {Object.keys(buttonTexts).map((buttonName) => (
          <button
            key={buttonName}
            onClick={() => handleTopButtonClick(buttonName)}
            className={`py-[10px] px-[24px] text-white w-full lg:w-[195px] h-[49px] p-[10px] gap-[10px] rounded-[16px] button-transition ${
              activeButton === buttonName ? 'button-active' : ''
            }`}
          >
            <span className="font-poppins text-[18px] font-medium leading-[16.12px] text-center text-white">
              {buttonName}
            </span>
          </button>
        ))}
      </div>

      {/* Text Display Area */}
      <div className="flex-grow overflow-auto scrollbar-hidden text-justify absolute w-full lg:w-[611px] h-[175px] top-[210px] lg:left-[975px] p-4 rounded-lg">
        <span className="font-plus-jakarta-sans text-[20px] font-normal leading-[25.2px] text-[#969696]">
          {topText}
        </span>
      </div>

     {/* Sidebar */}
      <div className="flex flex-col justify-between w-[24px] h-[159.69px] top-[116px] md:hidden left-[934px] absolute">
        <img src={myimg} alt="Description" className="rounded-[50%] " />
        <img src={myimg2} width={20} height={20} />
      </div>

      {/* Divider Section */}
      <div className="absolute w-full lg:w-[612px] h-[4px] top-[433px] lg:left-[976px] bg-[linear-gradient(180deg,_rgba(40,_40,_40,_0.1)_0%,_rgba(248,_248,_248,_0.1)_100%),_linear-gradient(0deg,_rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05))]"></div>
      <div className="absolute w-[8px] h-[64px] top-[207px] left-[1621px] rounded-[8px] border hidden lg:block"></div>

      {/* Bottom Section */}
      <div className="absolute flex flex-col justify-between bg-[#363C43] p-4 h-[330px] top-[453px] lg:left-[922px] gap-0 opacity-1 w-full lg:w-[720px] rounded-[18.89px]"  style={{
    boxShadow: '5.67px 5.67px 3.78px 0px #00000066'
  }} />
      
      {/* Outer Section */}
      <div className="absolute flex w-full lg:w-[652px] h-[475px] top-[436px] lg:left-[953px]">

        {/* Bottom Buttons */}
        <button className="px-4 py-2 text-white w-[62px] sm:w-[149px] h-[62px] top-[37px] left-[20px] gap-0 rounded-[20px] bg-[#171717] relative">
          <p className="font-poppins text-[20px] font-medium text-center">Gallery</p>
        </button>
        <button
  onClick={() => fileInputRef.current.click()}
  className="px-4 py-2 bg-[#363C43] text-white rounded-[104px] absolute top-[45px] md:left-[360px] sm:left-[400px]  w-[131px] h-[46px] flex items-center justify-center"
  style={{ boxShadow: '0px 3.26px 3.26px 0px #FFFFFF26 inset, 0px 0px 48.91px 0px #FFFFFF0D inset, 9px 10px 7.1px 0px #00000066, -0.5px -0.5px 6.9px 0px #FFFFFF40' }}
>
  <span className="font-plus-jakarta-sans text-xs-custom font-extrabold leading-custom text-center text-[12px] text-white">
    + ADD IMAGE
  </span>
</button>
        <button
          onClick={handlePrevImage}
          className="px-4 py-2 bg-gradient-to-r from-[#303439] to-[#161718] h-[45px] w-[45px] rounded-full absolute top-[48px] md:left-[600px] lg:left-[518px] hover:bg-gray-700 active:bg-gradient-to-br active:from-[#96BEE7] active:to-[#101213] transition duration-300 ease-in-out"
          style={{ boxShadow: '-5px -3px 30px -10px #96BEE7,-5px -3px 30px -10px #96BEE7' }}
        >
          <span className="w-[14.19px] h-[14px] text-[#6F787C]">&larr;</span>
        </button>
        <button
          onClick={handleNextImage}
          className="px-4 py-2 bg-gradient-to-r from-[#303439] to-[#161718] h-[45px] w-[45px] text-white rounded-full absolute top-[49px] md:left-[700px] lg:left-[581px] hover:bg-gray-700 active:bg-gradient-to-br active:from-[#96BEE7] active:to-[#101213] transition duration-300 ease-in-out"
          style={{ boxShadow: '-5px -3px 30px -10px #96BEE7,-5px -3px 30px -10px #96BEE7' }}
        >
          <span className="w-[14.19px] h-[14px] text-[#6F787C] ">&rarr;</span>
        </button>
     
        {/* Image Display Area */}
        <div ref={imageContainerRef} className="flex absolute top-[91px] overflow-x-scroll scrollbar-hidden space-x-4 scroll-smooth w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-[319px] w-[300px] absolute grayscale hover:grayscale-0 hover:-rotate-3 transition-transform duration-300 hover:scale-110 "
              style={{ left: `${leftPositions[index]}px` }}
            >
              <div className="flex justify-center items-center h-[179px] w-[190px] top-[55px] left-[39px] absolute">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-[190px] h-[179px] object-cover rounded-[24px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Section */}
      <div className="absolute w-full lg:w-[612px] h-[4px] top-[800px] left-0 lg:left-[976px] bg-[linear-gradient(180deg,_rgba(40,_40,_40,_0.1)_0%,_rgba(248,_248,_248,_0.1)_100%),_linear-gradient(0deg,_rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05))]"></div>

      <div className="flex flex-col justify-between md-hidden w-[24px] h-[159.69px] top-[473px] left-[934px] absolute lg:flex">
        <img src={myimg} alt="Description" width={24} height={24} className="rounded-[50%]" />
        <img src={myimg2} width={24} height={30.69} />
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleAddImage}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Homepage;
