import getBase64 from "@/utils/getBase64";
import Image from "next/image";

async function ImgWithPlaceholder({ src }: { src: string }) {
  const { base64, img } = await getBase64(src);

  return (
    <Image
      {...img}
      alt={src}
      sizes="65vw"
      style={{ height: "auto" }}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}

export default ImgWithPlaceholder;
