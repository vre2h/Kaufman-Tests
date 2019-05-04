import { store } from "../store";

export function request(url, method, body = null) {
  const authToken = store.getState().login
    ? store.getState().login.token
    : undefined;

  const fetchData = {
    method,
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  };

  if (authToken) {
    fetchData.headers.Authorization = `JWT ${authToken}`;
  }

  if (body) {
    fetchData.body = JSON.stringify(body);
  }

  console.log(`url - "/${url}"\nrequest - `, body);

  return new Promise((resolve, reject) =>
    fetch(`${url}`, fetchData).then(
      async res => {
        console.log(res);
        const parsedBody = await res.json();
        console.log(`url - "/${url}"\nresponse - `, parsedBody);

        if (res.ok) return resolve(parsedBody);
        return reject(parsedBody);
      },
      async e => reject(e)
    )
  );
}

export function doGet(url) {
  return request(url, "GET");
}
export function doPost(url, body = null) {
  return request(url, "POST", body);
}
export function doPut(url, body = null) {
  return request(url, "PUT", body);
}
export function doPatch(url, body = null) {
  return request(url, "PATCH", body);
}
export function doDelete(url, body = null) {
  return request(url, "DELETE", body);
}
