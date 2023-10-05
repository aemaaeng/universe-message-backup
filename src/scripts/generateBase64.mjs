import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

async function generateAllBase64() {
  const imageDirectory = path.join(process.cwd(), "public", "media");
  let result = {};

  let files = await readdir(path.join(imageDirectory));
  files = files.filter((file) => {
    return (
      file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png")
    );
  });

  const imageData = await Promise.all(
    files.map(async (filename) => {
      const imageBuffer = await readFile(
        path.join("public", "media", filename)
      );

      const {
        metadata: { height, width },
        base64,
      } = await getPlaiceholder(imageBuffer, { size: 10 });

      result[filename] = {
        base64,
        img: { src: `/media/${filename}`, height, width },
      };
    })
  );

  return result;
}

async function writeJSON(obj) {
  const exists = (
    await readdir(path.join(process.cwd(), "src", "scripts"))
  ).includes("output");

  if (!exists) {
    await mkdir(path.join(process.cwd(), "src", "scripts", "output"));
  }

  await writeFile(
    path.join(process.cwd(), "src", "scripts", "output", "base64.json"),
    JSON.stringify(obj)
  );
}

generateAllBase64().then((res) => writeJSON(res));
