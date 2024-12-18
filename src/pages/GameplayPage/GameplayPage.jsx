import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import boardImage from "../../assets/gameboard.png";
import userPic from "../../assets/userpic.svg";
import alienImage from "../../assets/alienbob.png";
import lockIcon from "../../assets/icons8-lock-64.png";
import placeAlienOnGrid from "../../utilities/placeAlienOnGrid";
import Modal from "../../components/GamePlay/Modal/Modal";
import Button from "../../components/Button/Button";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { AuthContext } from "../../providers/AuthProvider";
import { GameplayItems } from "../../BigVariables/BigVariables";
import { GameplayTimes } from "../../BigVariables/BigVariables";
import { GameplayTimeTitles } from "../../BigVariables/BigVariables";
import { BorderColors } from "../../BigVariables/BigVariables";
import FinishedGameBanner from "../../components/FinishedGameBanner/FinishedGameBanner";
import WellPlayedBanner from "../../components/WellPlayedBanner/WellPlayedBanner";

const gameplayFields = [116, 87, 200, 48, 212, 120, 205, 52, 165, 82, 223, 154]; // Playable fields

function GameplayPage({ onLogOut }) {
  const { user } = useContext(AuthContext);
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [icons, setIcons] = useState(Array(10).fill(lockIcon));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWellPlayedBanner, setShowWellPlayedBanner] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [flashIndex, setFlashIndex] = useState(null); // New state for flashing item

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const startingFieldId = `${gameplayFields[0]}`;
    placeAlienOnGrid(startingFieldId, alienImage);
  }, []);

  useEffect(() => {
    const currentFieldId = `${gameplayFields[currentFieldIndex]}`;
    placeAlienOnGrid(currentFieldId, alienImage);
  }, [currentFieldIndex, showWellPlayedBanner]);

  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentFieldIndex(1);
  };

  const handleMoveNext = () => {
    const nextIndex = (currentFieldIndex + 1) % gameplayFields.length;
    const nextFieldId = `${gameplayFields[nextIndex]}`;
    placeAlienOnGrid(nextFieldId, alienImage);
    setCurrentFieldIndex(nextIndex);
  };

  const handleCorrectAnswer = () => {
    setTimeout(() => setShowWellPlayedBanner(true), 1800);

    setTimeout(() => {
      setRewards((prevRewards) => {
        const updatedRewards = [...prevRewards, "Reward"];
        const rewardIndex = updatedRewards.length - 1;

        setIcons((prevIcons) => {
          const newIcons = [...prevIcons];
          if (rewardIndex < GameplayItems.length) {
            newIcons[rewardIndex] = GameplayItems[rewardIndex];
          }
          return newIcons;
        });

        // Trigger flash for the new item
        setFlashIndex(rewardIndex);

        // Remove flash class after animation completes
        setTimeout(() => setFlashIndex(null), 2000); // Matches animation duration
        return updatedRewards;
      });

      setTimeout(() => {
        setShowWellPlayedBanner(false);
        handleMoveNext();
      }, 1500);
    }, 3000);
  };

  const finishGame = () => {
    setIsGameFinished(true);
  };

  useEffect(() => {
    if (currentFieldIndex === gameplayFields.length - 1) {
      const timer = setTimeout(() => {
        finishGame();
      }, showWellPlayedBanner ? 6000 : 4000);

      return () => clearTimeout(timer);
    }
  }, [currentFieldIndex, showWellPlayedBanner]);

  return (
    <main>
    {isGameFinished ? (
      <div className="finished-game-container">
        <FinishedGameBanner />
        <div className="button-group flex flex-row gap-4">
          <button
          className="play-again-btn h-14 w-52 p-1.5 text-[26px] absolute top-[550px] left-[720px] z-30"
          onClick={() => {
            setCurrentFieldIndex(0);
            setGameStarted(false);
            setRewards([]);
            setIcons(Array(10).fill(lockIcon));
            setIsGameFinished(false);
          }}
        >
            Play Again
          </button>
          <Link to="/">
          <button
          className="exit-btn h-14 w-52 p-1.5 text-[26px] absolute top-[550px] left-[980px] z-30"
          >
            Exit
          </button>
          </Link>
        </div>
      </div>
    ) : (
        <div className="boxForGameplayAndMenu flex flex-row flex-nowrap gap-12 w-full h-[541px] max-h-[541px]">
          <div className="boxForGameplayAndItems flex flex-col flex-nowrap w-full h-[541px] max-h-[541px] min-h-[541px] relative z-20 border-2 border-[#8168fe] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]">
            <div className="boxForGameplay block w-full h-[465px] max-h-[465px] min-h-[465px]">
              {showWellPlayedBanner ? (
                <WellPlayedBanner />
              ) : (
                <>
                  <div className="playboard w-full h-[465px] max-h-[465px] min-h-[465px] z-10 absolute opacity-100">
                    {
                      <img
                        className="playboard-img"
                        src={boardImage}
                        alt="game playboard"
                      />
                    }
                  </div>
                  <div
                    className="playboard-grid grid grid-cols-14 gap-0 w-full h-[465px] max-h-[465px] min-h-[465px] z-20"
                    id="playboard-grid"
                  >
                    {[...Array(294)].map((_, index) => (
                      <div
                        key={index}
                        id={index + 1}
                        className="relative text-[0.7rem] text-transparent text-center max-w-[75px]"
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div id="itemList" className="itemList flex flex-row flex-nowrap w-full bg-[#d9f9cf] border-t-2 border-[#8168fe] rounded-b-md z-40">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className={`item flex justify-center items-center bg-[#fefffa] h-[70px] w-[10%] p-2 border-l border-r border-[#8168fe] relative ${
                    flashIndex === index ? "animate-flash" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 border-[6px] ${BorderColors[index % BorderColors.length]} flex justify-center items-center`}
                  >
                     <img
                        src={icon}
                        className={`${icon === lockIcon ? "w-[40px]" : "max-h-[40px] max-w-[65px]"} mx-4`}
                        alt="icon"
                      />
                    </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="boxForMenu flex flex-col items-center justify-evenly text-center w-[20%] h-full bg-[#bbbbff] rounded-md border-2 border-[#8168fe] p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]">
            <div id="user" className="user flex flex-col items-center">
              <img
                src={userPic}
                className="align-self-end bg-[#cde4ff] w-[180px] max-h-[80px] pt-2 pr-4 pl-2 rounded-t-md border-b-[1px] border-l-2 border-r-2 border-t-2 border-[#8168fe]"
                alt="little Alien"
              />
              <h3
                id="userName"
                className="text-[16px] bg-[#fefffa] w-[180px] py-0.5 rounded-b-md border-b-2 border-l-2 border-r-2 border-[#8168fe] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                {user ? user.displayName || user.email : "Guest Player"}
              </h3>
            </div>
            <div
              id="gameProgress"
              className="gameProgress text-[14px] leading-4 text-center h-[160px] w-[180px] mt-4 mb-0 p-[0.5rem] bg-[#fefffa] rounded-md border-2 border-[#8168fe] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            >
              <p>You are in</p>
              <p className="text-[16px] leading-6 text-[#1e83ff]">{GameplayTimeTitles[currentFieldIndex]}</p>
              <p>{GameplayTimes[currentFieldIndex]}</p>
            </div>
            <div>
            <Button
                text={!gameStarted ? "Start game" : currentFieldIndex !== 11 ? "Next riddle" : "Finish game"}
                onClick={!gameStarted ? handleStartGame : currentFieldIndex !== 11 ? openModal : finishGame}
                className="my-0"
              />
              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                handleMoveNext={handleMoveNext}
                setRewards={setRewards}
                handleCorrectAnswer={handleCorrectAnswer}
              />

            </div>
            <div className="musicBox w-[180px] h-32">
              <MusicPlayer />
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}// End of GameplayPage

export default GameplayPage;