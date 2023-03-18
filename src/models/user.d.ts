export interface UserInfo{
    "id": number,
    "email": string,
    "locale": string,
    "status": string,
    "nickname": string,
    "photo": null | string,
    "maskedEmail": string,
    "clientUiConfig": {
      "showId": boolean,
      "allowChangeUserPic": boolean,
      "allowChangeNickname": boolean
    },
    "info": {
      "firstName": string,
      "lastName": string,
      "middleName": string | null,
      "birthday": null | string
    },
    "phone": {
      "id": number,
      "phone": string,
      "ext": null | string,
      "type": null | string,
      "confirm": boolean,
      "default": boolean,
      "maskedPhone": string
    },
    "phones": [
      {
        "id": number,
        "phone": string,
        "ext": null | string,
        "type": null | string,
        "confirm": boolean,
        "default": boolean,
        "maskedPhone": string
      }
    ],
    "type": {
      "id": number,
      "default": boolean,
      "enabled": boolean,
      "name": string,
      "group": string,
      "wizard": boolean
    },
    "country": {
      "countryId": number,
      "alpha2Code": string,
      "alpha3Code": string,
      "countryName": string,
      "numericCode": string,
      "enabled": boolean
    },
    "verificationLevel": {
      "id": number,
      "name": string
    },
    "lastLoginTime": string,
    "createTime": string,
    "updateTime": string,
    "limits": {
      "maxDemoTradingAccounts": null | string,
      "maxLiveTradingAccounts": null | string
    }
  }