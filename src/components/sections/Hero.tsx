const Hero = () => {
  return (
    <div
      className="w-80 lg:w-full md:w-full sm:w-80 flex flex-col justify-center
        py-2 text-center lg:text-center md:text-center sm:text-center"
    >
      <h1
        className="text-2xl lg:text-5xl md:text-5xl sm:text-xl font-bold
          font-(family-name:--font-archivo-black) my-5"
      >
        Chelsea Oktaviany
      </h1>
      <h2
        className="text-xs lg:text-2xl md:text-2xl sm:text-md font-light
          font-(family-name:--font-pontano-sans"
      >
        Fullstack Developer | linkedin.com/in/chelseaoktaviany
      </h2>
    </div>
  );
};

export default Hero;
