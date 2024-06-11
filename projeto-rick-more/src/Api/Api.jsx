async function Api(query) {
  const api = await fetch(`https://rickandmortyapi.com/api/${query}`);
  const data = await api.json();
  return data.results;
}

export default Api;
