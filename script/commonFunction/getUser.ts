export const getUser = async () => {
  const idUser = localStorage.getItem("curr-user-id");
  const fecthData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      _id: idUser,
    }),
  };
  const response = await fetch(`http://localhost:5000/auth/user`, fecthData);
  return {
    item: await response.json(),
  };
};
