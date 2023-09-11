import FeedBackComponent from "../components/feedback/FeedBackComponent";

const FeedBack = ({setFeedbackRate,feedbackRate}) => {
  return (
    <>
      <div className="bg-gray h-[184px] flex items-center justify-center">
        <div className="font-bold text-green ml-4 text-[60px]">
          GIVE AS A FEEDBACK
        </div>
      </div>
      <FeedBackComponent setFeedbackRate={setFeedbackRate} feedbackRate={feedbackRate}/>
    </>
  );
};
export default FeedBack;
