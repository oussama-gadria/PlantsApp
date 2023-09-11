const AboutUs = () => {
  return (
    <>
      <div className="bg-gray h-[184px] flex items-center justify-center">
        <div className="font-bold text-green ml-4 text-[60px]">
          ABOUT GREEN THUMB
        </div>
      </div>
      <div className="container mx-auto py-32 flex flex-row ">
        <div>
          <img
            alt="..."
            className="rounded-l-lg"
            src="https://images.squarespace-cdn.com/content/v1/5a5fccd6e45a7c0ce208c18b/1595410665845-099OIOQ7Z3TG5MXD3CKD/Herbie+Background.jpg?format=2500w"
          />
        </div>
        <div className="bg-gray flex rounded-r-lg flex-col items-center justify-center ">
          <p className="font-bold text-4xl pb-6 text-green">OUR STORY</p>
          <p className="font-semibold text-center px-4">
          Once upon a time in Bloomsville, there was a mischievous plant named Sprout. During the grand opening of Mr. Greenleaf's plant store, Sprout caused chaos by splashing water on unsuspecting visitors and playing pranks. Despite the mayhem, everyone laughed and had a memorable time. Sprout's playful nature became legendary in Bloomsville, attracting visitors from far and wide. If you visit the store, keep an eye out for Sprout's mischief and prepare for a fun-filled experience!
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
