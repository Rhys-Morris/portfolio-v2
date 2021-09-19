export const convertImageUrls = (content: string): string => {
  const imageMdRegexp = new RegExp(
    /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/,
    "gi"
  );
  const images = content.match(imageMdRegexp);
  if (!images) return content;
  images.forEach((img) => {
    let imgPath = img.split("(")[1];
    imgPath = imgPath.slice(0, imgPath.length - 1); // Remove trailing ')'
    const correctUrl = "http://localhost:1337" + imgPath;
    content = content.replace(img, `${img.split("(")[0]}(${correctUrl})`);
  });
  return content;
};

export const validateName: (name: string) => true = (name) => {
  if (name === "") throw new Error("Name must not be empty");
  return true;
};
