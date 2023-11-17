export function createRequestBody(searchObject) {
    const startDate = searchObject.tripStart.split('.').reverse().join('-');
    const endDate = searchObject.tripEnd.split('.').reverse().join('-');
    return {
        "issueDateInterval": {
          "startDate": startDate,
          "endDate": endDate
        },
        "searchContext": {
          "targetSearchEntitiesContext": {
            "targetSearchEntities": [
              {
                "type": "company",
                "sparkId": null,
                "entityId": null,
                "inn": searchObject.INN,
                "maxFullness": searchObject.maxFullness,
                "inBusinessNews": searchObject.inBusinessNews
              }
            ],
            "onlyMainRole": searchObject.onlyMainRole,
            "tonality": searchObject.tonality,
            "onlyWithRiskFactors": searchObject.onlyWithRiskFactors,
            // В рамках данного проекта не используется.
            "riskFactors": { 
              "and": [],
              "or": [],
              "not": []
            },
            // В рамках данного проекта не используется.
            "themes": {
              "and": [],
              "or": [],
              "not": []
            }
          },
          // Уточняющий запрос по темам. Необязательное.
          "themesFilter": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        // В рамках данного проекта не используется.
        "searchArea": {
          "includedSources": [],
          "excludedSources": [],
          "includedSourceGroups": [],
          "excludedSourceGroups": []
        },

        "attributeFilters": {
          "excludeTechNews": searchObject.excludeTechNews,
          "excludeAnnouncements": searchObject.excludeAnnouncements,
          "excludeDigests": searchObject.excludeDigests,
        },
        "similarMode": "none",
        "limit": searchObject.quantityPages,
        "sortType": "issueDate",
        "sortDirectionType": "desc",
        // Для целей данного проекта необходимо отправлять значение month.
        "intervalType": "month",
        // Для целей данного проекта необходимо отправлять оба значения.
        "histogramTypes": [
          "totalDocuments",
          "riskFactors"
        ]
      }
}