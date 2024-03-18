const axios = require('axios');

async function createInvestmentAccount() {
    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
    const headers = {
        'Content-Type': 'application/json'
    };
    const data = {
        name: 'Siddhant',
        email: 'siddhant1176.be21@chitkarauniversity.edu.in',
        rollNumber: 2111981176,
        phone: 9996486199
    };

    try {
        const response = await axios.post(url, data, { headers: headers });
        const accountNumber = response.data.accountNumber;
        console.log('Account Number:', accountNumber);
        return accountNumber;
    } catch (error) {
        console.error(error.response.data);
    }
}

async function buyStocks() {
    const accountNumber = await createInvestmentAccount();

    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
    const headers = {
        'Content-Type': 'application/json',
        'bfhl-auth': 2111981176
    };
    const data = {
        company: 'Bajaj Finserv',
        currentPrice: 13400,
        accountNumber: accountNumber,
        githubRepoLink: 'https://github.com/siddhantvadi'
    };

    try {
        const response = await axios.post(url, data, { headers: headers });
        console.log(response.data);
    } catch (error) {
        console.error(error.response.data);
    }
}

buyStocks();