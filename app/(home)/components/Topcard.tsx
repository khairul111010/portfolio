const Topcard = () => {
  return (
    <div className="max-w-[1128px] m-auto mt-16 text-black dark:text-white grid grid-cols-4 gap-4">
      <section className="col-span-3 bg-white dark:bg-[#1B1F23] overflow-hidden rounded-md relative">
        <img src={"/cover.svg"} alt="cover" className="w-full" />
        <img
          src={"/dp.webp"}
          alt="Profile Picture"
          className="h-36 w-36 object-contain rounded-full border-2 border-white dark:border-[#1B1F23] absolute -translate-y-2/4 translate-x-4"
        />
        <div className="flex items-start justify-between mt-[70px] p-4">
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-medium dark:text-white text-black">
                Khairul Hasan
              </h1>
              <img src={"/verified.svg"} alt="verified" className="w-6 h-6" />
            </div>
            <p className="dark:text-gray-300 text-slate-600">
              Frontend Engineer (4 yrs +) - React, Redux, Next, JavaScript,
              TypeScript, Nodejs
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <section className="bg-white dark:bg-[#1B1F23] h-fit p-4 rounded-md">
        skills
      </section>
    </div>
  );
};

export default Topcard;
