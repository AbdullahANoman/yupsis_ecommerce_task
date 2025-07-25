import Image from "next/image";
import { GalleryData } from "./galleryData";

const Gallery = () => {
  return (
    <div className="px-2 max-w-7xl	mx-auto">
      <p className="text-5xl py-14 text-center text-[#1A2B5F] font-bold ">
        We design toys not just for kids <br /> but with kids
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {GalleryData.map((item) => (
          <div
            key={item.id}
            data-aos={item.id % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-duration="800"
          >
            <Image
              src={item.image}
              className="w-[350px] rounded-2xl"
              alt="galleryImage"
              width={350}
              height={350}
            />
            <div className="flex justify-between items-center text-2xl">
              <p className="text-xl py-3 font-semibold hover:text-[#4ACDD5]">
                {item.title}
              </p>
              <p>------</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
