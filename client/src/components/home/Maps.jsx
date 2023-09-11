const Maps = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row items-center  pb-4 pt-4">
        <p className="font-bold text-green text-[45px]">Your Plant </p>
        <p className="pl-1 font-black  text-[45px]">is Here</p>
      </div>
      <div class="container bg-green mx-auto rounded-lg w-full h-96 mb-24">
        <iframe
          title="MyPosition"
          className="p-5 w-full rounded-lg h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </>
  );
};
export default Maps;
