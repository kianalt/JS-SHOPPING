const shortenText = (text) => {
  //3 frist word
  return text.split("").slice(0, 3).join("");
};

export { shortenText };
