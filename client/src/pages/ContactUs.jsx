import { useState } from "react";
import { UserApi } from "../Apis/userAPI";

const ContactUs = () => {
  const [mailSubject, setMailSubject] = useState();
  const [mailMessage, setMailMessage] = useState();

  const sendEmailToCustomer = async () => {
    try {
      await UserApi.sendEmailToCustomer(mailSubject, mailMessage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gray h-[184px] flex items-center justify-center">
        <div className="font-bold text-green ml-4 text-[60px]">
          Still need help ?
        </div>
      </div>
      <div className="container mx-auto flex flex-row items-center bg-gray rounded-lg  my-24  md:px-6">
        <div className=" flex basis-1/2">
          <img
            alt="..."
            src="https://thumbs.6sqft.com/wp-content/uploads/2018/04/10122057/NYC-10-best-plant-shops.png"
          />
        </div>
        <div className=" flex flex-col justify-center items-center basis-1/2 mt-2">
          <p className="text-lg font-extrabold text-green ">Subject</p>
          <input
            type="text"
            className=" w-[430px] rounded-md border border-gray py-1.5 pl-1 text-green "
            onChange={(e) => setMailSubject(e.target.value)}
          />
          <form className="my-2">
            <p className="text-lg text-center  font-extrabold text-green ">
              Your Email
            </p>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray ">
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-[400px] h-[300px] text-lg text-bold text-gray-900 border-0 focus:ring-0 focus:outline-none text-green dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
                onChange={(e) => setMailMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className=" inline-flex items-center py-2.5 px-4  font-medium text-lg text-center text-white bg-green rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                onClick={sendEmailToCustomer}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
