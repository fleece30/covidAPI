const siteURL = "https://www.mohfw.gov.in/";
const axios = require('axios');
const cheerio = require('cheerio');
const states = [];
const country = [];

const fetchData = async () => {
    const result = await axios.get(siteURL);
    return cheerio.load(result.data);
}

const printData = async () => {
    const $ = await fetchData();
    $('.site-stats-count > ul').each((index, element) => {
        const ele = $(element).text().trim().split('\n');
        // console.log(ele[0].trim());
        const data = {
            'active': ele[0].trim(),
            'cured': ele[5].trim(),
            'deaths': ele[12].trim(),
            'migrated': ele[17].trim()
        }
    });
} 

const printStateData = async () => {
    const $ = await fetchData();
    $('.data-table > table > tbody > tr').each((index, element) => {
        if(index>31) return false;
        const ele = $(element).text().trim().split('\n');
        const data = {
            'trimmedState': ele[1].toLowerCase().trim().replace(/ +/g, ""),
            'stateName': ele[1].trim(), 
            'total': parseInt(ele[2].trim()),
            'recovered': parseInt(ele[3].trim()),
            'deaths': parseInt(ele[4].trim()),
        }
        states.push(data);
    })
} 

printStateData();
printData();

module.exports = {states, country};