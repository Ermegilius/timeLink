import { useState, useEffect } from "react";
import "./GameplayPage.css";
import userPic from "../../assets/userpic.svg";
import alienImage from "../../assets/alienbob.png";
import lockIcon from "../../assets/icons8-lock-64.png";
import starIcon from "../../assets/icons-star-64.png";
import settingsIcon from "../../assets/icons8-settings.svg";
import placeAlienOnGrid from "../../utilities/placeAlienOnGrid";
import Modal from "../../components/GamePlay/Modal/Modal";
import Button from "../../components/Button/Button";
import Banner from "../../components/WelcomeBanner/WelcomeBanner";

const gameplayFields = [116, 73, 200, 48, 212, 106, 191, 52, 165, 82, 223, 140]; // Playable fields

function GameplayPage({ onLogOut }) {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [icons, setIcons] = useState(Array(10).fill(lockIcon)); // Initialize with default icons

  const [isModalOpen, setIsModalOpen] = useState(false); //modal is closed by default
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Initialize the avatar at the starting grid
  useEffect(() => {
    const startingFieldId = `${gameplayFields[0]}`; // Get the starting grid ID
    placeAlienOnGrid(startingFieldId, alienImage); // Place the alien on the grid
  }, []);

  const handleMoveNext = () => {
    const nextIndex = (currentFieldIndex + 1) % gameplayFields.length;
    const nextFieldId = `${gameplayFields[nextIndex]}`;
    placeAlienOnGrid(nextFieldId, alienImage); // Move the alien to the next grid
    setCurrentFieldIndex(nextIndex);
  };

  const handleCorrectAnswer = () => {
    setRewards((prevRewards) => [...prevRewards, "Reward"]); // Add a prize to rewards
    setIcons((prevIcons) => {
      const newIcons = [...prevIcons];
      newIcons[rewards.length] = starIcon; // Update the icon for the current reward (to star now). CHANGE IT WHEN WE DEFINE REWARDS FOR EVERY QUESTION
      return newIcons;
    });
    handleMoveNext(); // Automatically move the avatar to the next grid
  };

  return (
    <main>
      <Banner></Banner>
      <div className="boxForTitle"></div>
      <div className="boxForGameplayAndMenu my-5">
        <div className="boxForGameplay">
          <div className="playboard-grid" id="playboard-grid">
            {[...Array(294)].map((_, index) => (
              <div key={index} id={index + 1} className="field">
                {index + 1}
              </div>
            ))}
          </div>
          <div id="itemList" className="itemList">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="item flex justify-center items-center"
              >
                <img src={icon} className="lockIcon" alt="icon" />
              </div>
            ))}
          </div>
        </div>
        <aside className="boxForMenu">
          <div id="user" className="user">
            <img src={userPic} alt="little Alien" />
            <h3 id="userName">Username</h3>
          </div>
          <div id="gameProgress" className="gameProgress">
            <h3>Progress</h3>
            <p>Current Field: {gameplayFields[currentFieldIndex]}</p>
          </div>
          <div>
            <Button text="Next riddle" onClick={openModal} />
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              handleMoveNext={handleMoveNext}
              setRewards={setRewards}
              handleCorrectAnswer={handleCorrectAnswer}
            />
          </div>

          <Button text="Exit" onClick={onLogOut} data-role="primary" />
          <div id="settings">
            <a href="#">
              <img
                src={settingsIcon}
                className="settingsIcon"
                alt="settings icon"
              />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default GameplayPage;
