import axios from "axios";

const AlphavantageAxios = axios.create({
  baseURL: "https://www.alphavantage.co",
  params: {
    apikey: "VHYRW9V5QUGMITFJ",
  },
});

export const search = (value: string) =>
  AlphavantageAxios.get(`/query`, {
    params: { function: "SYMBOL_SEARCH", keywords: value },
  });
