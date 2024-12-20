import wellPlayedImage from '../../assets/wellplayedBanner.png';

  const WellPlayedBanner = () => {
  
  return (
    <div className="wellplayed-banner h-[465px] max-h-[465px] min-h-[465px] w-[1044px] max-w-[1044px] min-w-[1044px]">
        <img className="wellplayed-img block h-[465px] max-h-[465px] min-h-[465px] w-[1044px] max-w-[1044px] min-w-[1044px] z-10 relative" src={wellPlayedImage} alt="alien showing thumbs up" />
        <div className="typewriter-text absolute top-[240px] left-[767px] transform -translate-x-1/2 whitespace-normal text-left w-[300px] leading-[1.5] font-typewriter text-[30px] z-30">
            <p>Well played!</p>
            <p>A new item is rewarded for your effort.</p>
        </div> 
    </div>
  );
}

export default WellPlayedBanner;

