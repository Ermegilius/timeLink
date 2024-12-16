import React, { useState, useEffect } from "react";
import finishedGameImage from '../../assets/finishedgameBanner.png';
import ufoImage from '../../assets/ufo.png';
import beamBobImage from '../../assets/beambob.png';

  const FinishedGameBanner = () => {
    const [displayText, setDisplayText] = useState(""); 
    const fullText = "That was the last item, you found them all and helped me through your planet's fascinating history! Now I will return to my faraway home to share my findings. Thank you again, and let's meet again in the future!";
    const typingSpeed = 65;
  
    useEffect(() => {
      let charIndex = 0;
      const typeText = () => {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(typeText, typingSpeed);
        }
      };
      typeText();
    }, []); 
  
  return (
    <div className="finishedgame-banner border-2 border-[#8168fe] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]">
        <img className="finishedgame-img block w-full h-[541px] max-h-[541px] z-10 relative" src={finishedGameImage} alt="alien beamed up to ufo to leave back to home planet" />
        <div className="ufo-image">
            <img className="ufo-image absolute top-[156px] left-[309px] z-30 animate-move-up animate-slide-out" src={ufoImage} alt="ufo image" />
        </div>  
        <div className="beam-image">
            <img className="beam-image absolute top-[300px] left-[350px] z-30 animate-flicker-fadeout" src={beamBobImage} alt="alien in ufo beam image" />
        </div>
        <div className="typewriter-text absolute top-[270px] left-[960px] transform -translate-x-1/2 whitespace-normal text-left w-[420px] leading-[1] font-typewriter text-[31px] z-30">
            {displayText.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                {line}
                <br />
                </React.Fragment>
            ))}
        </div> 
    </div>
  );
}

export default FinishedGameBanner;