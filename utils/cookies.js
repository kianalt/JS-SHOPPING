const setCookies = (data) => {
  document.cookie = `token=${data}; max-age=${24 * 60 * 60}; path=/`;
};
// authorization method
const getCookie = () => {
  // get saved token in cookie
  const cookie = document.cookie;
  if (cookie) {
    // make readable and cut frome =
    const cookieArray = cookie.split("=");
    return {
      //use [] for cookieArray[0] beacuse it is a key
      [cookieArray[0]]: cookieArray[1],
    };
  } else {
    return false;
  }
};

export { setCookies, getCookie };
