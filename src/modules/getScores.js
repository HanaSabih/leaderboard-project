const getScores = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default getScores;
