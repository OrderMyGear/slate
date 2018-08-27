#  User auth tokens 

## Generate authentication token for a user

```shell
 POST https://subdomain.mybrightsites.com/api/v1/user_auth_tokens?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "login_url": "https://subdomain.mybrightsites.com/account/token_auth?token=62BMxzbhY9GFpETFwzeu" } 
```

### HTTP Request

`POST /api/v1/user_auth_tokens`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
username  |  required  | Username |  Must be a String 


