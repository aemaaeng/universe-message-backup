import { promises as fs } from "fs";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (src: string) => {
  const byEnv = async (src: string) => {
    if (process.env.NODE_ENV === "development") {
      return await fs.readFile(path.join("./public", src));
    } else {
      return await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}${src}`).then(
        async (res) => Buffer.from(await res.arrayBuffer())
      );
    }
  };

  const buffer = await byEnv(src);

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default getBase64;
