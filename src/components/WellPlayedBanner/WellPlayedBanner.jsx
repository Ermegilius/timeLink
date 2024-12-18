import wellPlayedImage from '../../assets/wellplayedBanner.png';

  const WellPlayedBanner = () => {
  
  return (
    <div className="wellplayed-banner h-[466px] max-h-[466px] min-h-[466px]">
        <img className="wellplayed-img block h-[466px] max-h-[466px] min-h-[466px] w-full z-10 relative" src={wellPlayedImage} alt="alien showing thumbs up" />
        <div className="typewriter-text absolute top-[22%] left-[66%] transform -translate-x-1/2 whitespace-normal text-left w-[27%] leading-[1.5] font-typewriter text-[30px] z-30">
            <p>Well played!</p>
            <p>A new item is rewarded for your effort.</p>
        </div> 
    </div>
  );
}

export default WellPlayedBanner;

