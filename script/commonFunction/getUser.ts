export const getUser = async()=>{
    const idUser = localStorage.getItem('curr-user-id');
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
               item: await response.json()
           }
    }

export const getUserFromId = async(id:string)=>{
  const fecthData = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          _id: id,
      }),
  };
  const response = await fetch(`http://localhost:5000/auth/user`, fecthData);
  return {
             item: await response.json()
         }
  }


    export const getPetsitters = async () => {
        const fetchData = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
        const response = await fetch(`http://localhost:5000/users/petsitters`, fetchData);
        return {
          item: await response.json(),
        };
      };
