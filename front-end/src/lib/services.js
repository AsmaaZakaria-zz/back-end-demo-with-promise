const baseUrl = "http://192.168.10.154:8090";

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

export const loginUser = (user) => {
  return fetch (`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-type": "application/json",
    },
    body: JSON.stringify(user)
  }).then(res => {
    console.log("=== loginUser method === ", res);
    res.json();
  })
}

export const list = () => {
  //fetch will return response object
  return fetch(`${baseUrl}/home`)
    .then(res => res.json())
    .then(lists => {
      console.log('=== list action ===', lists)
      return lists
    })
}


export const addOrder = (order) => {
  return fetch (`${baseUrl}/addOrders`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-type": "application/json",
    },
    body: JSON.stringify(order)
  }).then(res => {
    console.log("=== add order res === ", res);
    return res.json();
  }).then((ress) => {console.log("=== promise === ", ress.msg)
    return ress.msg
  })
}

export const addItems = (item) => {
  return fetch (`${baseUrl}/addItem`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-type": "application/json",
    },
    body: JSON.stringify(item)
  }).then(res => {
    console.log("=== add items action === ", res);
    res.json();
  })
}
