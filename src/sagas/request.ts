function parseJSON(response: Response) {
  return response.json();
}

function catchError(error: object) {
  throw error;
}

export default function request(url: string, options: object) {
  return fetch(url, options)
    .then(parseJSON)
    .catch(catchError);
}
