import axios from 'axios';

import {
  BASE_URL, 
  LOGIN_URL, 
  INFO_URL, 
  HISTOGRAMS_URL, 
  OBJECT_SEARCH_URL,
  SCAN_DOC_URL
} from '../constants/URL';

function errorHandler (error) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
}

export default class Services {

    static async getToken (login, password) {
        let tokenObj = {accessToken: '', expire: ''};
        const response = await axios.post(
          BASE_URL + LOGIN_URL, 
          {
              'login': login,
              'password': password,
          },
          {
              headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              }
          }
        )
        .then(function (response) {
            tokenObj.accessToken = response.data.accessToken;
            tokenObj.expire = response.data.expire;
        })
        .catch(function (error) {
            errorHandler(error)
          })
        return tokenObj;
    }
/************************************************************/
    static async getLimit (token) {
      let limitData = {companyLimit: 0, usedCompanyCount: 0 };
      const response = await axios.get(
        BASE_URL + INFO_URL,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      )
      .then(function (response) {
        limitData.companyLimit = response.data.eventFiltersInfo.companyLimit;
        limitData.usedCompanyCount = response.data.eventFiltersInfo.usedCompanyCount;
      })
      .catch(function (error) {
        errorHandler(error)
      });
      
      return limitData;
    }
/************************************************************/
    static async getHistograms (requestBody, token) {
      let histogramsData = {totalDocuments: [], riskFactors: []};
      const response = await axios.post(
        BASE_URL + HISTOGRAMS_URL,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
            'Accept': 'application/json'
          }
        }
      ).then(function (response) {
        histogramsData.totalDocuments = response.data.data[0].data;
        histogramsData.riskFactors = response.data.data[1].data;
      }).catch(function (error) {
        errorHandler(error);
      });
      return histogramsData;
    }
/************************************************************/  
  static async getObjectID(requestBody, token) {
    let encodedIdList = {};
    const response = await axios.post(
      BASE_URL + OBJECT_SEARCH_URL,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then(function(response) {
      encodedIdList = response.data.items;
    }).catch(function(error) {
      errorHandler(error)
    });
    return encodedIdList
  }
/************************************************************/  
  static async getScanDocList(requestBody, token) {
    let scanDocList = {};
    const response = await axios.post(
      BASE_URL + SCAN_DOC_URL,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then(function(response) {
      scanDocList = response.data
    }).catch(function(error) {
      errorHandler(error)
    });
    return scanDocList
  }

};
