const baseUrl = "http://localhost:8090";

export const createUser = (user) => {
  return fetch (`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-type": "application/json",
    },
    body: JSON.stringify(user)
  }).then(res => {
    console.log("=== createUser method === ", res);
    res.json();
  })
}
