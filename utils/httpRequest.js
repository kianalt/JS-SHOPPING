const BASE_URL = "https://fakestoreapi.com";
// sent username and password for getting JWT
const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // authorization: `Berear ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    alert("An error occured!");
  }
};

const getDtata = async (path) => {
  try {
    const responsec = await fetch(`${BASE_URL}/${path}`);
    const result = await responsec.json();
    return result;
  } catch (error) {
    alert("An error occured!");
  }
};

export { postData, getDtata };
