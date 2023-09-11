import ThankYou from "../components/feedback/ThankYou";

const ThankYouFeedback = ({setFeedbackRate,feedbackRate}) => {
  return (
    <>
      <div className="bg-gray h-[184px] flex items-center justify-center">
        <div className="font-bold text-green ml-4 text-[60px]">
          Thank your for your Feedback !
        </div>
      </div>
      <ThankYou setFeedbackRate={setFeedbackRate} feedbackRate={feedbackRate}/>
    </>
  );
};
export default ThankYouFeedback;
