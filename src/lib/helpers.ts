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

export const validateForm: (name: string, email: string) => true = (
  name,
  email
) => {
  const VALID_EMAIL =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (name === "") throw new Error("Name must not be empty");
  if (!email.match(VALID_EMAIL)) throw new Error("Email is an invalid format");
  return true;
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
