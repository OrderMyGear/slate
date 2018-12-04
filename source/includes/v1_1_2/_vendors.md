#  Vendors

## List vendors

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/vendors?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "vendors": [
    {
      "id": 579,
      "name": "The Willy Wonka Company",
      "products": [
        {
          "id": 100,
          "name": "Licorice",
          "sku": "lic-1"
        }
      ],
      "active": true
    }
  ],
  "meta": {
    "total": 1,
    "offset": 0,
    "limit": 0
  }
}
```

### HTTP Request

`GET /api/v1.1.2/vendors`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>page </strong></div><div> optional </div> | <div>Pagination page number</div><div> Must be a number. </div>
<div><strong>per_page </strong></div><div> optional </div> | <div>Pagination per page number</div><div> Must be a number. </div>


## Show vendor

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/vendors/579?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "The Willy Wonka Company",
  "products": [
    {
      "id": 100,
      "name": "Licorice",
      "sku": "lic-1"
    }
  ],
  "address1": "2010 Oompa-Loompa drive",
  "address2": "",
  "city": "Sweetstown",
  "state": "Texas",
  "zip_code": "99099",
  "phone": "123123123123",
  "email": "test@test.com",
  "account_number": "account123123",
  "asi_number": "asi123456",
  "active": true
}
```

### HTTP Request

`GET /api/v1.1.2/vendors/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Vendor ID</div><div> Must be a number. </div>


## Create vendor

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/vendors?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "vendor": {
    "name": "The Willy Wonka Company",
    "address1": "2010 Oompa-Loompa drive",
    "city": "Sweetstown",
    "state": "Texas",
    "zip_code": "99099",
    "phone": "123123123123",
    "email": "test@test.com",
    "account_number": "account123123"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "The Willy Wonka Company",
  "products": [],
  "address1": "2010 Oompa-Loompa drive",
  "address2": "",
  "city": Sweetstown,
  "state": Texas,
  "zip_code": 99099,
  "phone": "123123123123",
  "email": "test@test.com",
  "account_number": "account123123",
  "active": true
}
```

### HTTP Request

`POST /api/v1.1.2/vendors`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>vendor </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>vendor[name] </strong></div><div> required </div> | <div>Unique name</div><div> Must be a String </div>
<div><strong>vendor[address1] </strong></div><div> optional , nil allowed </div> | <div>First address</div><div> Must be a String </div>
<div><strong>vendor[address2] </strong></div><div> optional , nil allowed </div> | <div>Second address</div><div> Must be a String </div>
<div><strong>vendor[city] </strong></div><div> optional , nil allowed </div> | <div>City</div><div> Must be a String </div>
<div><strong>vendor[state] </strong></div><div> optional , nil allowed </div> | <div>State</div><div> Must be a String </div>
<div><strong>vendor[zip_code] </strong></div><div> optional , nil allowed </div> | <div>Zip code</div><div> Must be a String </div>
<div><strong>vendor[phone] </strong></div><div> optional , nil allowed </div> | <div>Phone number</div><div> Must be a String </div>
<div><strong>vendor[email] </strong></div><div> optional , nil allowed </div> | <div>Email address</div><div> Must be a String </div>
<div><strong>vendor[account_number] </strong></div><div> optional , nil allowed </div> | <div>Account number</div><div> Must be a String </div>
<div><strong>vendor[asi_number] </strong></div><div> optional , nil allowed </div> | <div>ASI number</div><div> Must be a String </div>
<div><strong>vendor[active] </strong></div><div> optional , nil allowed </div> | <div>Enable / Disable vendor</div><div> Must be one of: true, false, 1, 0 </div>


## Update vendor

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/vendors/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "vendor": {
    "name": "The Willy Wonka Great Company",
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "The Willy Wonka Great Company",
  "products": [
    {
      "id": 100,
      "name": "Licorice",
      "sku": "lic-1"
    }
  ],
  "address1": "2010 Oompa-Loompa drive",
  "address2": "",
  "city": "Sweetstown",
  "state": "Texas",
  "zip_code": "99099",
  "phone": "123123123123",
  "email": "test@test.com",
  "account_number": "account123123",
  "active": true
}
```

### HTTP Request

`PUT /api/v1.1.2/vendors/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>vendor </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>vendor[name] </strong></div><div> optional </div> | <div>Unique name</div><div> Must be a String </div>
<div><strong>vendor[address1] </strong></div><div> optional , nil allowed </div> | <div>First address</div><div> Must be a String </div>
<div><strong>vendor[address2] </strong></div><div> optional , nil allowed </div> | <div>Second address</div><div> Must be a String </div>
<div><strong>vendor[city] </strong></div><div> optional , nil allowed </div> | <div>City</div><div> Must be a String </div>
<div><strong>vendor[state] </strong></div><div> optional , nil allowed </div> | <div>State</div><div> Must be a String </div>
<div><strong>vendor[zip_code] </strong></div><div> optional , nil allowed </div> | <div>Zip code</div><div> Must be a String </div>
<div><strong>vendor[phone] </strong></div><div> optional , nil allowed </div> | <div>Phone number</div><div> Must be a String </div>
<div><strong>vendor[email] </strong></div><div> optional , nil allowed </div> | <div>Email address</div><div> Must be a String </div>
<div><strong>vendor[account_number] </strong></div><div> optional , nil allowed </div> | <div>Account number</div><div> Must be a String </div>
<div><strong>vendor[asi_number] </strong></div><div> optional , nil allowed </div> | <div>ASI number</div><div> Must be a String </div>
<div><strong>vendor[active] </strong></div><div> optional , nil allowed </div> | <div>Enable / Disable vendor</div><div> Must be one of: true, false, 1, 0 </div>


## Delete vendor

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/vendors/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "The Willy Wonka Great Company",
  "products": [
    {
      "id": 100,
      "name": "Licorice",
      "sku": "lic-1"
    }
  ],
  "address1": "2010 Oompa-Loompa drive",
  "address2": "",
  "city": "Sweetstown",
  "state": "Texas",
  "zip_code": "99099",
  "phone": "123123123123",
  "email": "test@test.com",
  "account_number": "account123123",
  "active": true
}
```

### HTTP Request

`DELETE /api/v1.1.2/vendors/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Vendor ID</div><div> Must be a number. </div>


