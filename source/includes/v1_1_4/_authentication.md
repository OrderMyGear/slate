# Authentication

> To authorize, use this code:

```shell
# You can just pass your token as the parameter
GET https://subdomain.mybrightsites.com/api/v1.1.4/orders?token=your_api_token
```

> Make sure to replace subdomain with your real subdomain and your_api_token with your API token.

Bright Sites uses tokens to allow access to the API. You can manage your API tokens in the website admin area(/admin/api_keys).

Bright Sites API expects for the API token to be included in all API requests to the server as a parameter that looks like the following:

`token=your_api_token`

<aside class="notice">
You must replace `your_api_token` with your API token.
</aside>
