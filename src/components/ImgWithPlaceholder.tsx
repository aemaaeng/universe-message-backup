import getBase64 from "@/utils/getBase64";
import Image from "next/image";

interface ImgPropTypes {
  src: string;
  sizes?: string;
  style?: React.CSSProperties;
}

async function ImgWithPlaceholder({ src, ...props }: ImgPropTypes) {
  const { base64, img } = await getBase64(src);

  return (
    <Image
      {...img}
      alt={src}
      {...props}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}

export default ImgWithPlaceholder;
