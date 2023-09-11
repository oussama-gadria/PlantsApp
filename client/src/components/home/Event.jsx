const Event = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row items-center pt-6 ">
        <p className="font-bold text-green text-[45px]">Be Ready </p>
        <p className="pl-1 font-black  text-[45px]">To Our Event </p>
      </div>
      <div class="container mx-auto lg:flex shadow rounded-lg border  border-green mt-6 mb-16">
        <div class="bg-green rounded-lg lg:w-2/12 py-12 block h-full shadow-inner">
          <div class="text-center tracking-wide">
            <div class="text-white font-bold text-4xl ">26</div>
            <div class="text-white font-normal text-2xl">avril</div>
          </div>
        </div>
        <div class="w-full flex flex-col justify-center lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
          <div class="flex flex-row lg:justify-start justify-center">
            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              <i class="far fa-clock"></i> 1:30 PM
            </div>
            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              Organiser : DROXIC
            </div>
          </div>
          <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            International Tree Day
          </div>

          <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
            A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New Delhi, 110018
          </div>
        </div>
      </div>
    </>
  );
};
export default Event;
