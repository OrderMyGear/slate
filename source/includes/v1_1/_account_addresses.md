#  Account addresses 

## List of addresses for user

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/users/494/addresses?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "addresses": [ { "id": 1006, "nickname": "order #13 shipping address", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "Florida", "second_address": "", "state": "Alabama", "city": "City", "country": "United States", "zip": "222222", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": false } ], "meta": { "total": 6, "offset": 0, "limit": 50 } } 
```

### HTTP Request

`GET /api/v1.1/users/:user_id/addresses`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user_id  |  required  | User ID |  Must be a number. 
page  |  optional  | Pagination page number |  Must be a number. 
per_page  |  optional  | Pagination per page number |  Must be a number. 


## Show address

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/users/494/addresses/1006?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 1006, "nickname": "order #13 shipping address", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "Florida", "second_address": "", "state": "Alabama", "city": "City", "country": "United States", "zip": "222222", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": false } 
```

### HTTP Request

`GET /api/v1.1/users/:user_id/addresses/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user_id  |  required  | User ID |  Must be a number. 
id  |  required  | Address ID |  Must be a number. 


## Create address

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/users/494/addresses?token=GXzAxWkkyYLsESGQTU15 { "address": { "nickname": "Work", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "301", "second_address": "W 6th Ave", "state": "Colorado", "city": "Denver", "country": "United States", "zip": "80204", "email": "john@example.com", "phone": "+1234567890", "default_shipping": true } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 1556, "nickname": "Work", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "301", "second_address": "W 6th Ave", "state": "Colorado", "city": "Denver", "country": "United States", "zip": "80204", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": true } 
```

### HTTP Request

`POST /api/v1.1/users/:user_id/addresses`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user_id  |  required  | User ID |  Must be a number. 
address  |  required  | Validations: |  Must be a Hash 
address[nickname]  |  required  | Name of address |  Must be a String 
address[first_name]  |  optional , nil allowed  | First name |  Must be a String 
address[last_name]  |  optional , nil allowed  | Last name |  Must be a String 
address[company]  |  optional , nil allowed  | Company |  Must be a String 
address[first_address]  |  required  | First address |  Must be a String 
address[second_address]  |  optional , nil allowed  | Second address |  Must be a String 
address[state]  |  required  | State |  Must be a String 
address[city]  |  required  | City |  Must be a String 
address[country]  |  required  | Country |  Must be a String 
address[zip]  |  required  | Zip Code |  Must be a String 
address[email]  |  optional , nil allowed  | E-mail |  Must be a String 
address[phone]  |  optional , nil allowed  | Phone |  Must be a String 


## Update address

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/users/494/addresses/1556?token=GXzAxWkkyYLsESGQTU15 { "address": { "nickname": "Work", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "301", "second_address": "W 6th Ave", "state": "Colorado", "city": "Denver", "country": "United States", "zip": "80204", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": true } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 1556, "nickname": "Work", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "301", "second_address": "W 6th Ave", "state": "Colorado", "city": "Denver", "country": "United States", "zip": "80204", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": true } 
```

### HTTP Request

`PATCH /api/v1.1/users/:user_id/addresses/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user_id  |  required  | User ID |  Must be a number. 
address  |  required  | Validations: |  Must be a Hash 
address[nickname]  |  optional  | Name of address |  Must be a String 
address[first_name]  |  optional , nil allowed  | First name |  Must be a String 
address[last_name]  |  optional , nil allowed  | Last name |  Must be a String 
address[company]  |  optional , nil allowed  | Company |  Must be a String 
address[first_address]  |  optional  | First address |  Must be a String 
address[second_address]  |  optional , nil allowed  | Second address |  Must be a String 
address[state]  |  optional  | State |  Must be a String 
address[city]  |  optional  | City |  Must be a String 
address[country]  |  optional  | Country |  Must be a String 
address[zip]  |  optional  | Zip Code |  Must be a String 
address[email]  |  optional , nil allowed  | E-mail |  Must be a String 
address[phone]  |  optional , nil allowed  | Phone |  Must be a String 


## Update address

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/users/494/addresses/1556?token=GXzAxWkkyYLsESGQTU15 { "address": { "nickname": "Work", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "301", "second_address": "W 6th Ave", "state": "Colorado", "city": "Denver", "country": "United States", "zip": "80204", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": true } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 1556, "nickname": "Work", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "301", "second_address": "W 6th Ave", "state": "Colorado", "city": "Denver", "country": "United States", "zip": "80204", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": true } 
```

### HTTP Request

`PUT /api/v1.1/users/:user_id/addresses/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user_id  |  required  | User ID |  Must be a number. 
address  |  required  | Validations: |  Must be a Hash 
address[nickname]  |  optional  | Name of address |  Must be a String 
address[first_name]  |  optional , nil allowed  | First name |  Must be a String 
address[last_name]  |  optional , nil allowed  | Last name |  Must be a String 
address[company]  |  optional , nil allowed  | Company |  Must be a String 
address[first_address]  |  optional  | First address |  Must be a String 
address[second_address]  |  optional , nil allowed  | Second address |  Must be a String 
address[state]  |  optional  | State |  Must be a String 
address[city]  |  optional  | City |  Must be a String 
address[country]  |  optional  | Country |  Must be a String 
address[zip]  |  optional  | Zip Code |  Must be a String 
address[email]  |  optional , nil allowed  | E-mail |  Must be a String 
address[phone]  |  optional , nil allowed  | Phone |  Must be a String 


## Delete address

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/users/494/addresses/1556?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 1556, "nickname": "Work", "first_name": "John", "last_name": "Doe", "company": "Testco LLC", "first_address": "301", "second_address": "W 6th Ave", "state": "Colorado", "city": "Denver", "country": "United States", "zip": "80204", "email": "john@example.com", "phone": "+1234567890", "default_billing": false, "default_shipping": true } 
```

### HTTP Request

`DELETE /api/v1.1/users/:user_id/addresses/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user_id  |  required  | User ID |  Must be a number. 
id  |  required  | Address ID |  Must be a number. 


