#  User auth tokens 

## Generate a login token for the shopper to sign in directly onto the website without a username or password. The token is generated based on the username being passed in the JSON parameters.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/user_auth_tokens?token=GXzAxWkkyYLsESGQTU15" \
  -X POST
```

> The above request returns JSON structured like this:

```json
{
  "login_url": "https://subdomain.mybrightsites.com/account/token_auth?token=62BMxzbhY9GFpETFwzeu"
}
```

### HTTP Request

`POST /api/v1.1/user_auth_tokens`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>username </strong></div><div> required </div> | <div>Username</div><div> Must be a String </div>


