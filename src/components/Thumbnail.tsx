import Image from "next/image";
import { Media } from "./ListItem";

function Thumbnail({ media }: { media: Media }) {
  const thumbnailFileName = {
    VOD: "videoThumbnail",
    VOICE: "voiceThumbnail",
    TEXT: "textThumbnail",
  };

  function thumbnailType(media: Media) {
    const { IMAGE, VOD, VOICE } = media;

    if (IMAGE) return "IMAGE";
    else if (VOD) return "VOD";
    else if (VOICE) return "VOICE";
    else return "TEXT";
  }

  const thumbnail = thumbnailType(media);

  return (
    <>
      {thumbnail === "IMAGE" ? (
        <Image
          src={`/media/${media.imgSrc}`}
          width="100"
          height="100"
          style={{ objectFit: "cover" }}
          alt="thumbnail"
          quality={50}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUg8AAc0BJTFUBKcAAAAASUVORK5CYII="
        />
      ) : (
        <Image
          src={`/icon/${thumbnailFileName[thumbnail]}.svg`}
          width="100"
          height="100"
          alt={thumbnailFileName[thumbnail]}
        />
      )}
    </>
  );
}

export default Thumbnail;
