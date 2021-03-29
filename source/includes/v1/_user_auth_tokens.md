#  User auth tokens

## Generate authentication token for a user

Generate a login token for the shopper to sign in directly onto the website without a username or password. The token is generated based on the username being passed in the JSON parameters. 
This API end-point involves an SSO functionality and configuration, therefore it requires an agreement with our sales team.

```shell
curl "https://subdomain.mybrightsites.com/api/v1/user_auth_tokens?token=GXzAxWkkyYLsESGQTU15" \
  -X POST
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "username": "foouser"
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "login_url": "https://subdomain.mybrightsites.com/account/token_auth?token=62BMxzbhY9GFpETFwzeu"
}
```

### HTTP Request

`POST /api/v1/user_auth_tokens`

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>username </strong></div><div> required </div> | <div>Username</div><div> Must be a String </div>
