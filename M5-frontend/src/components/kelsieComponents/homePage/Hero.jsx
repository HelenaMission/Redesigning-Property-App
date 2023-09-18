import hero from "../../../images/homePage/hero.png";

const Hero = () => {
  return (
    <section className="relative w-1280 h-710">
      <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center">
        <h1
          className="text-black font-plus-jakarta-sans text-4xl font-extrabold uppercase absolute left-60 w-[574.664px] text-left"
          style={{
            lineHeight: "121.2%",
            color: "var(--black, #1A1A1A)",
            fontSize: "40px",
            top: "127px",
            left: "60px",
          }}
        >
          Effortless Property Management, Exceptional Living.
        </h1>
        <div
          className="mt-55 flex justify-center space-x-4 absolute"
          style={{
            left: "60px",
          }}
        >
          <button
            className="flex w-177 h-44 px-20 justify-center items-center gap-8 rounded-md bg-red-700"
            style={{
              background: "#C52528",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "44px",
              gap: "8px",
            }}
          >
            <span
              className="text-white font-plus-jakarta-sans text-16 font-semibold"
              style={{ lineHeight: "35px" }}
            >
              Free Appraisal
            </span>
          </button>
          <span className="text-gray-600 font-plus-jakarta-sans text-16 font-semibold self-center">
            Contact us
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;