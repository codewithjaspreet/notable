export const Hero = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center p-10">
      <div className="w-full md:w-1/2 text-center">
        <h1 className="text-5xl font-bold mb-2">
          The Only <span className="text-blue-900">Crypto </span>
        </h1>
        <h1 className="text-5xl font-bold mb-5">
          Card <span className="text-blue-900">you need</span>
        </h1>
        <p className="text-lg mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat
          libero et nisi bibendum, eu tempor neque fringilla.
        </p>
        <button className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-400">
          Learn More
        </button>
      </div>
      <div className="w-1/2 md:w-1/2">
        <img
          src="/credit-card-1.png"
          className="object-fit w-50% md:w-100%"
        />
      </div>
    </div>
  );
};
