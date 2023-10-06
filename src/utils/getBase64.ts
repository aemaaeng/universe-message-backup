export default async function getBase64(src: string) {
  const trimmedSrc = src.split("/")[2];
  const base64JSON = require("../scripts/output/base64.json");
  return base64JSON[trimmedSrc];
}
