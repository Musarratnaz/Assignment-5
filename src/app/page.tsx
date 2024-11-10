import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[70%]">
        <div className="w-1/2 gap-6 px-[176px] pt-[316px] flex flex-col justify-center items-start">
          <h1 className="leading-[65.8px] text-[40px] font-bold text-[#000000] w-[496px] h-[189px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[30px] font-medium leading-[49.35px] tracking-[0.025em] w-[902px] h-[147px]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
        </div>
        <aside className="flex flex-col mt-[198px] ml-[140px] w-[462px] h-[647px] ">
          <div className="flex relative flex-col grow justify-center px-[24px] py-[28px] ">
            <Image
              loading="lazy"
              src={"/images/slider-1.jpg.svg"}
              width={490}
              height={667}
              alt="Elegant jewelry display"
              className="absolute inset-0 size-full rounded-[150px_0px_150px_0px]"
            />
            <div className="flex overflow-hidden relative flex-col border border-white border-solid rounded-[150px_0px_150px_0px]">
              <div className="flex shrink-0 border border-white border-solid w-[442px] h-[611px] rounded-[150px_0px_150px_0px]"></div>
            </div>
          </div>
                  
        </aside>
      </div>
      <div className="w-[228px] h-[58px] pl-[20px] ml-[400px] bg-[#A29875] p-[10px] gap-[15px] rounded-[10px]">
        <h1
          className="w-[177px] h-[38px] text-[#FFFFFF] text-[30px]">
          Explore Now
        </h1>
      </div>
    </div>
  );
}
