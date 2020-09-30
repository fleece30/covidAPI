const siteURL = "https://www.mohfw.gov.in/";
const axios = require("axios");
const cheerio = require("cheerio");
const states = [];
const country = [];

const fetchData = async () => {
  const result = await axios.get(siteURL);
  return cheerio.load(result.data);
};

const printData = async () => {
  const $ = await fetchData();
  $(".site-stats-count > ul").each((index, element) => {
    const ele = $(element).text().trim().split("\n");
    const data = {
      active: ele[0].trim(),
      cured: ele[5].trim(),
      deaths: ele[12].trim(),
      migrated: ele[17].trim(),
    };
    country.push(data);
  });
};

//add function here

printStateData();
printData();

module.exports = { states, country };
