#  Vendors 

## List vendors

```shell
 GET https://subdomain.mybrightsites.com/api/v1/vendors?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "vendors": [ { "id": 579, "name": "The Willy Wonka Company", "products": [ { "id": 100, "name": "Licorice", "sku": "lic-1" } ], "active": true } ], "meta": { "total": 1, "offset": 0, "limit": 0 } } 
```

### HTTP Request

`GET /api/v1/vendors`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
page  |  optional  | Pagination page number |  Must be a number. 
per_page  |  optional  | Pagination per page number |  Must be a number. 


## Show vendor

```shell
 GET https://subdomain.mybrightsites.com/api/v1/vendors/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "The Willy Wonka Company", "products": [ { "id": 100, "name": "Licorice", "sku": "lic-1" } ], "address1": "2010 Oompa-Loompa drive", "address2": "", "city": "Sweetstown", "state": "Texas", "zip_code": "99099", "phone": "123123123123", "email": "test@test.com", "account_number": "account123123", "asi_number": "asi123456", "active": true } 
```

### HTTP Request

`GET /api/v1/vendors/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Vendor ID |  Must be a number. 


## Create vendor

```shell
 POST https://subdomain.mybrightsites.com/api/v1/vendors?token=GXzAxWkkyYLsESGQTU15 { "vendor": { "name": "The Willy Wonka Company", "address1": "2010 Oompa-Loompa drive", "city": "Sweetstown", "state": "Texas", "zip_code": "99099", "phone": "123123123123", "email": "test@test.com", "account_number": "account123123" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "The Willy Wonka Company", "products": [], "address1": "2010 Oompa-Loompa drive", "address2": "", "city": Sweetstown, "state": Texas, "zip_code": 99099, "phone": "123123123123", "email": "test@test.com", "account_number": "account123123", "active": true } 
```

### HTTP Request

`POST /api/v1/vendors`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
vendor  |  required  | Validations: |  Must be a Hash 
vendor[name]  |  required  | Unique name |  Must be a String 
vendor[address1]  |  optional , nil allowed  | First address |  Must be a String 
vendor[address2]  |  optional , nil allowed  | Second address |  Must be a String 
vendor[city]  |  optional , nil allowed  | City |  Must be a String 
vendor[state]  |  optional , nil allowed  | State |  Must be a String 
vendor[zip_code]  |  optional , nil allowed  | Zip code |  Must be a String 
vendor[phone]  |  optional , nil allowed  | Phone number |  Must be a String 
vendor[email]  |  optional , nil allowed  | Email address |  Must be a String 
vendor[account_number]  |  optional , nil allowed  | Account number |  Must be a String 
vendor[asi_number]  |  optional , nil allowed  | ASI number |  Must be a String 
vendor[active]  |  optional , nil allowed  | Enable / Disable vendor |  Must be one of: true, false, 1, 0 


## Update vendor

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/vendors/579?token=GXzAxWkkyYLsESGQTU15 { "vendor": { "name": "The Willy Wonka Great Company", } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "The Willy Wonka Great Company", "products": [ { "id": 100, "name": "Licorice", "sku": "lic-1" } ], "address1": "2010 Oompa-Loompa drive", "address2": "", "city": "Sweetstown", "state": "Texas", "zip_code": "99099", "phone": "123123123123", "email": "test@test.com", "account_number": "account123123", "active": true } 
```

### HTTP Request

`PATCH /api/v1/vendors/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
vendor  |  required  | Validations: |  Must be a Hash 
vendor[name]  |  optional  | Unique name |  Must be a String 
vendor[address1]  |  optional , nil allowed  | First address |  Must be a String 
vendor[address2]  |  optional , nil allowed  | Second address |  Must be a String 
vendor[city]  |  optional , nil allowed  | City |  Must be a String 
vendor[state]  |  optional , nil allowed  | State |  Must be a String 
vendor[zip_code]  |  optional , nil allowed  | Zip code |  Must be a String 
vendor[phone]  |  optional , nil allowed  | Phone number |  Must be a String 
vendor[email]  |  optional , nil allowed  | Email address |  Must be a String 
vendor[account_number]  |  optional , nil allowed  | Account number |  Must be a String 
vendor[asi_number]  |  optional , nil allowed  | ASI number |  Must be a String 
vendor[active]  |  optional , nil allowed  | Enable / Disable vendor |  Must be one of: true, false, 1, 0 


## Update vendor

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/vendors/579?token=GXzAxWkkyYLsESGQTU15 { "vendor": { "name": "The Willy Wonka Great Company", } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "The Willy Wonka Great Company", "products": [ { "id": 100, "name": "Licorice", "sku": "lic-1" } ], "address1": "2010 Oompa-Loompa drive", "address2": "", "city": "Sweetstown", "state": "Texas", "zip_code": "99099", "phone": "123123123123", "email": "test@test.com", "account_number": "account123123", "active": true } 
```

### HTTP Request

`PUT /api/v1/vendors/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
vendor  |  required  | Validations: |  Must be a Hash 
vendor[name]  |  optional  | Unique name |  Must be a String 
vendor[address1]  |  optional , nil allowed  | First address |  Must be a String 
vendor[address2]  |  optional , nil allowed  | Second address |  Must be a String 
vendor[city]  |  optional , nil allowed  | City |  Must be a String 
vendor[state]  |  optional , nil allowed  | State |  Must be a String 
vendor[zip_code]  |  optional , nil allowed  | Zip code |  Must be a String 
vendor[phone]  |  optional , nil allowed  | Phone number |  Must be a String 
vendor[email]  |  optional , nil allowed  | Email address |  Must be a String 
vendor[account_number]  |  optional , nil allowed  | Account number |  Must be a String 
vendor[asi_number]  |  optional , nil allowed  | ASI number |  Must be a String 
vendor[active]  |  optional , nil allowed  | Enable / Disable vendor |  Must be one of: true, false, 1, 0 


## Delete vendor

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1/vendors/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "The Willy Wonka Great Company", "products": [ { "id": 100, "name": "Licorice", "sku": "lic-1" } ], "address1": "2010 Oompa-Loompa drive", "address2": "", "city": "Sweetstown", "state": "Texas", "zip_code": "99099", "phone": "123123123123", "email": "test@test.com", "account_number": "account123123", "active": true } 
```

### HTTP Request

`DELETE /api/v1/vendors/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Vendor ID |  Must be a number. 


