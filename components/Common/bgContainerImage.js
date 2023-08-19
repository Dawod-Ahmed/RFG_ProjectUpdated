import Image from "next/image";

const BgContainerImage = ({ src = null }) => {
  return (
    <Image
      style={{ zIndex: "-1" }}
      src={src}
      alt="Picture of the author"
      layout="fill"
      priority
      objectFit="cover"
      objectPosition="right"
      // placeholder="blur"
      quality={50}
      blurDataURL={src}
    />
  );
};

export default BgContainerImage;
