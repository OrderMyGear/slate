#  Users 

## List users

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/users?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "users": [ { "id": 579, "name": "John Doe", "username": "johndoe", "balance": "12.5", "active": true, "last_edited_date": "2016-07-01T22:53:03-06:00" } ], "meta": { "total": 1, "offset": 0, "limit": 0 } } 
```

### HTTP Request

`GET /api/v1.1/users`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
groups  |  optional  | Filter by groups |  Must be one of: Array, String. 
date_created_from  |  optional  | Filter by date created from |  Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” 
date_created_to  |  optional  | Filter by date created to |  Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” 
username  |  optional  | Filter by username |  Must be a String 
active  |  optional  | Filter by active/inactive users |  Must be one of: true, false, 1, 0 
page  |  optional  | Pagination page number |  Must be a number. 
per_page  |  optional  | Pagination per page number |  Must be a number. 


## Show user

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/users/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "username": "johndoe", "first_name": "John", "last_name": "Doe", "active": true, "confirmed": true, "email": "johndoe@email.com", "phone": "+1234567890", "company": "BSI", "title": "Support Leader", "groups": ["Public"], "balance": "12.5", "orders": [], "last_edited_date": "2016-07-01T22:53:03-06:00" } 
```

### HTTP Request

`GET /api/v1.1/users/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | User ID |  Must be a number. 


## Create user

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/users?token=GXzAxWkkyYLsESGQTU15 { "user": { "username": "johndoe", "first_name":"John", "last_name":"Doe", "active":true, "email":"johndoe@email.com", "phone":"+1234567890", "company":"BSI", "title":"Support Leader", "groups":["Public"], "balance":12.5, "password":"12345678", "cuf_1": "helloworld" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "username": "johndoe", "first_name": "John", "last_name": "Doe", "active": true, "confirmed": true, "email": "johndoe@email.com", "phone": "+1234567890", "company": "BSI", "title": "Support Leader", "groups": ["Public"], "balance": "12.5", "orders": [], "last_edited_date": "2016-07-01", "cuf_1": "helloworld" } 
```

### HTTP Request

`POST /api/v1.1/users`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user  |  required  | Validations: |  Must be a Hash 
user[username]  |  required  | Unique username |  Must be a String 
user[first_name]  |  required  | First name |  Must be a String 
user[last_name]  |  required  | Last name |  Must be a String 
user[email]  |  required  | Email |  Must be a String 
user[phone]  |  optional , nil allowed  | Phone number |  Must be a String 
user[company]  |  optional , nil allowed  | Company |  Must be a String 
user[title]  |  optional , nil allowed  | Title |  Must be a String 
user[groups]  |  optional , nil allowed  | Assign groups |  Must be an array of String 
user[balance]  |  optional , nil allowed  | Balance |  Must be a float. 
user[note]  |  optional , nil allowed  | Create comment |  Must be a String 
user[password]  |  optional , nil allowed  | Password |  Must be a String 
user[cuf_<custom user field id>]  |  optional , nil allowed  | Custom User Field |  Must be a String 


## Update user

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/users/579?token=GXzAxWkkyYLsESGQTU15 { "user": { "username": "johndoe", "first_name":"John", "last_name":"Doe", "active":true, "email":"johndoe@email.com", "phone":"+1234567890", "company":"BSI", "title":"Support Leader", "groups":["Public"], "balance":12.5, "password":"12345678", "cuf_1": "12345678" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "username": "johndoe", "first_name": "John", "last_name": "Doe", "active": true, "confirmed": true, "email": "johndoe@email.com", "phone": "+1234567890", "company": "BSI", "title": "Support Leader", "groups": ["Public"], "balance": "12.5", "orders": [], "last_edited_date": "2016-07-01", "cuf_1": "12345678" } 
```

### HTTP Request

`PATCH /api/v1.1/users/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user  |  required  | Validations: |  Must be a Hash 
user[username]  |  optional  | Unique username |  Must be a String 
user[first_name]  |  optional  | First name |  Must be a String 
user[last_name]  |  optional  | Last name |  Must be a String 
user[email]  |  optional  | Email |  Must be a String 
user[phone]  |  optional , nil allowed  | Phone number |  Must be a String 
user[company]  |  optional , nil allowed  | Company |  Must be a String 
user[title]  |  optional , nil allowed  | Title |  Must be a String 
user[groups]  |  optional , nil allowed  | Assign groups |  Must be an array of String 
user[balance]  |  optional , nil allowed  | Balance |  Must be a float. 
user[increase_balance]  |  optional , nil allowed  | Increase Balance |  Must be a float. 
user[decrease_balance]  |  optional , nil allowed  | Decrease Balance |  Must be a float. 
user[note]  |  optional , nil allowed  | Create comment |  Must be a String 
user[password]  |  optional , nil allowed  | Password |  Must be a String 
user[cuf_<custom user field id>]  |  optional , nil allowed  | Custom User Field |  Must be a String 


## Update user

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/users/579?token=GXzAxWkkyYLsESGQTU15 { "user": { "username": "johndoe", "first_name":"John", "last_name":"Doe", "active":true, "email":"johndoe@email.com", "phone":"+1234567890", "company":"BSI", "title":"Support Leader", "groups":["Public"], "balance":12.5, "password":"12345678", "cuf_1": "12345678" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "username": "johndoe", "first_name": "John", "last_name": "Doe", "active": true, "confirmed": true, "email": "johndoe@email.com", "phone": "+1234567890", "company": "BSI", "title": "Support Leader", "groups": ["Public"], "balance": "12.5", "orders": [], "last_edited_date": "2016-07-01", "cuf_1": "12345678" } 
```

### HTTP Request

`PUT /api/v1.1/users/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
user  |  required  | Validations: |  Must be a Hash 
user[username]  |  optional  | Unique username |  Must be a String 
user[first_name]  |  optional  | First name |  Must be a String 
user[last_name]  |  optional  | Last name |  Must be a String 
user[email]  |  optional  | Email |  Must be a String 
user[phone]  |  optional , nil allowed  | Phone number |  Must be a String 
user[company]  |  optional , nil allowed  | Company |  Must be a String 
user[title]  |  optional , nil allowed  | Title |  Must be a String 
user[groups]  |  optional , nil allowed  | Assign groups |  Must be an array of String 
user[balance]  |  optional , nil allowed  | Balance |  Must be a float. 
user[increase_balance]  |  optional , nil allowed  | Increase Balance |  Must be a float. 
user[decrease_balance]  |  optional , nil allowed  | Decrease Balance |  Must be a float. 
user[note]  |  optional , nil allowed  | Create comment |  Must be a String 
user[password]  |  optional , nil allowed  | Password |  Must be a String 
user[cuf_<custom user field id>]  |  optional , nil allowed  | Custom User Field |  Must be a String 


## Delete user

```shell
DELETE https://subdomain.mybrightsites.com/api/v1.1/users/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "username": "johndoe", "first_name": "John", "last_name": "Doe", "active": true, "confirmed": true, "email": "johndoe@email.com", "phone": "+1234567890", "company": "BSI", "title": "Support Leader", "groups": [], "balance": "12.5", "orders": [], "last_edited_date": "2016-07-01" } 
```

### HTTP Request

`DELETE /api/v1.1/users/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | User ID |  Must be a number. 


