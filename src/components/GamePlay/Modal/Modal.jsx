import { useEffect, useState } from "react";
import ShowRiddle from "../ShowRiddle/ShowRiddle";

const Modal = ({ isOpen, onClose, handleCorrectAnswer }) => {
  const [riddle, setRiddle] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [modalText, setModalText] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    if (isOpen) {
      fetchRiddleAndAnswers();
    }
  }, [isOpen]);

  const fetchRiddleAndAnswers = async () => {
    try {
      // Fetch the riddle
      const riddleResponse = await fetch(
        "https://riddles-api.vercel.app/random"
      );
      const riddleData = await riddleResponse.json();
      console.log("Fetched Riddle:", riddleData);

      // Fetch incorrect answers
      const wordsResponse = await fetch(
        "https://random-word-api.vercel.app/api?words=3"
      );
      const wordsData = await wordsResponse.json();
      console.log("Fetched Incorrect Answers:", wordsData);

      // Combine correct and incorrect answers, then shuffle
      const allAnswers = shuffleArray([riddleData.answer, ...wordsData]);

      setRiddle(riddleData); // Set the fetched riddle
      setAnswers(allAnswers); // Set the answers array
    } catch (error) {
      console.error("Failed to fetch riddle or answers:", error);
      setRiddle({
        riddle: "Error fetching riddle. Please try again later.",
        answer: "",
      });
      setAnswers([]);
    }
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    if (
      selectedAnswer.trim().toLowerCase() ===
      riddle?.answer?.trim().toLowerCase()
    ) {
      setModalText("Correct answer!");
      setBgColor("bg-emerald-500");
      setTimeout(() => {
        onClose(); // Close the modal
        setModalText("");
      }, 1800);
      handleCorrectAnswer(); // Call the correct answer handler
    } else {
      setModalText("Incorrect answer, try again!");
      setBgColor("bg-rose-500");
    }
    setTimeout(() => {
      setBgColor("");
      setModalText("");
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay fixed inset-0 bg-[#0f0831] bg-opacity-50 flex justify-center items-center z-50 ${bgColor}`}
    >
      <div className="modal-content bg-[#fefffa] p-6 rounded-lg relative w-4/5 max-w-xl max-h-[90%] overflow-auto">
        <h1 className={`text-2xl text-transparent bg-clip-text ${modalText === "Correct answer!"
            ? "bg-gradient-to-r from-green-500 to-blue-500"
            : "bg-gradient-to-r from-red-400 to-fuchsia-400"
          } pt-[20px]`}>{modalText}</h1>
        <button
          className="modal-close w-10 rounded-md absolute top-0 right-6"
          onClick={onClose}
        >
          X
        </button>
        <div className="riddle-section mt-12">
          {riddle ? (
            <>
              <ShowRiddle riddle={riddle} />
              <div className="answer-buttons flex flex-col flex-wrap gap-3 mt-4">
                {answers.map((answer, index) => (
                  <button
                    className="answer-button flex-1 w-full min-w-[100px] text-lg my-1 px-4 py-2 bg-gray-200 border border-gray-300 rounded-md cursor-pointer text-center whitespace-normal hover:bg-[#BBBBFF] hover:border-[#8168fe]"
                    key={index}
                    onClick={() => handleAnswerSubmit(answer)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default Modal;
