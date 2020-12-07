import axios from 'axios';

export const baseUrl = 'https://swapi.dev/api';

export const getAllPlanets = async () => {  
  return await getAllDataRecursively('/planets/')
}

export const getPlanetData = async (planetId) => {
  return await getSingleDataFromEndpoint(`/planets/${planetId}`)
}

export const getAllResidents = async () => {  
  return await getAllDataRecursively('/people/')
}

export const getResidentData = async (residentId) => {
  return await getSingleDataFromEndpoint(`/people/${residentId}`)
}

const getAllDataRecursively = async (endpoint, page = 1) => {  
  const query = `${baseUrl}${endpoint}?page=${page}`
  const response = await axios.get(query)  
  let data = response.data.results;

  if (response.data.next !== null) {
    const planets = await getAllDataRecursively(endpoint, page + 1);
    data = data.concat(planets) 
  }
  return data
}

const getSingleDataFromEndpoint = async (endpoint) => {
  const query = `${baseUrl}${endpoint}`
  return getDataFromUrl(query)
}

export const getDataFromUrl = async url => {
  const response = await axios.get(url)  
  let data = response.data;
  return data
}