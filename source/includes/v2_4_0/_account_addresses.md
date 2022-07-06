#  Account addresses

## List of Addresses for User

List the account level address book for a specific user based on the user ID (not username) you supply.
Keep in mind, the response will return up to 500 records on a single page and you will need to use "per_page" and "page" URL parameters to see all the records.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/users/494/addresses?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "addresses": [
    {
      "id": 1006,
      "nickname": "order #13 shipping address",
      "first_name": "John",
      "last_name": "Doe",
      "company": "Testco LLC",
      "first_address": "Florida",
      "second_address": "",
      "state": "Alabama",
      "city": "City",
      "country": "United States",
      "zip": "222222",
      "email": "john@example.com",
      "phone": "+1234567890",
      "default_billing": false,
      "default_shipping": false
    }
  ],
  "meta": {
    "total": 6,
    "offset": 0,
    "limit": 50
  }
}
```

### HTTP Request

`GET /api/v2.4.0/users/:user_id/addresses`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>page </strong></div><div>optional</div> | <div>Pagination page number</div><div>Must be a number</div>
<div><strong>per_page </strong></div><div>optional</div> | <div>Pagination per page number</div><div>Must be a number</div>


## Show Address
Show address information (Address 1, Address 2, City, etc) for one address in the user’s address book based on the address ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/users/494/addresses/1006?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 1006,
  "nickname": "order #13 shipping address",
  "first_name": "John",
  "last_name": "Doe",
  "company": "Testco LLC",
  "first_address": "Florida",
  "second_address": "",
  "state": "Alabama",
  "city": "City",
  "country": "United States",
  "zip": "222222",
  "email": "john@example.com",
  "phone": "+1234567890",
  "default_billing": false,
  "default_shipping": false
}
```

### HTTP Request

`GET /api/v2.4.0/users/:user_id/addresses/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Address ID</div><div>Must be a number</div>


## Create Address

Create an address for a specific user in their account level address book.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/users/494/addresses?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "address": {
    "nickname": "Work",
    "first_name": "John",
    "last_name": "Doe",
    "company": "Testco LLC",
    "first_address": "301",
    "second_address": "W 6th Ave",
    "state": "Colorado",
    "city": "Denver",
    "country": "United States",
    "zip": "80204",
    "email": "john@example.com",
    "phone": "+1234567890",
    "default_shipping": true
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 1556,
  "nickname": "Work",
  "first_name": "John",
  "last_name": "Doe",
  "company": "Testco LLC",
  "first_address": "301",
  "second_address": "W 6th Ave",
  "state": "Colorado",
  "city": "Denver",
  "country": "United States",
  "zip": "80204",
  "email": "john@example.com",
  "phone": "+1234567890",
  "default_billing": false,
  "default_shipping": true
}
```

### HTTP Request

`POST /api/v2.4.0/users/:user_id/addresses`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>address </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>address[nickname] </strong></div><div>required</div> | <div>Name of address</div><div>Must be a String</div>
<div><strong>address[first_name] </strong></div><div>optional , nil allowed</div> | <div>First name</div><div>Must be a String</div>
<div><strong>address[last_name] </strong></div><div>optional , nil allowed</div> | <div>Last name</div><div>Must be a String</div>
<div><strong>address[company] </strong></div><div>optional , nil allowed</div> | <div>Company</div><div>Must be a String</div>
<div><strong>address[first_address] </strong></div><div>required</div> | <div>First address</div><div>Must be a String</div>
<div><strong>address[second_address] </strong></div><div>optional , nil allowed</div> | <div>Second address</div><div>Must be a String</div>
<div><strong>address[state] </strong></div><div>required</div> | <div>State</div><div>Must be a String</div>
<div><strong>address[city] </strong></div><div>required</div> | <div>City</div><div>Must be a String</div>
<div><strong>address[country] </strong></div><div>required</div> | <div>Country</div><div>Must be a String</div>
<div><strong>address[zip] </strong></div><div>required</div> | <div>Zip Code</div><div>Must be a String</div>
<div><strong>address[email] </strong></div><div>optional , nil allowed</div> | <div>E-mail</div><div>Must be a String</div>
<div><strong>address[phone] </strong></div><div>optional , nil allowed</div> | <div>Phone</div><div>Must be a String</div>


## Update address

Update an address in a user’s account level address book based on the address ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/users/494/addresses/1556?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "address": {
    "nickname": "Work",
    "first_name": "John",
    "last_name": "Doe",
    "company": "Testco LLC",
    "first_address": "301",
    "second_address": "W 6th Ave",
    "state": "Colorado",
    "city": "Denver",
    "country": "United States",
    "zip": "80204",
    "email": "john@example.com",
    "phone": "+1234567890",
    "default_billing": false,
    "default_shipping": true
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 1556,
  "nickname": "Work",
  "first_name": "John",
  "last_name": "Doe",
  "company": "Testco LLC",
  "first_address": "301",
  "second_address": "W 6th Ave",
  "state": "Colorado",
  "city": "Denver",
  "country": "United States",
  "zip": "80204",
  "email": "john@example.com",
  "phone": "+1234567890",
  "default_billing": false,
  "default_shipping": true
}
```

### HTTP Request

`PUT /api/v2.4.0/users/:user_id/addresses/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Address ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>address </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>address[nickname] </strong></div><div>optional</div> | <div>Name of address</div><div>Must be a String</div>
<div><strong>address[first_name] </strong></div><div>optional , nil allowed</div> | <div>First name</div><div>Must be a String</div>
<div><strong>address[last_name] </strong></div><div>optional , nil allowed</div> | <div>Last name</div><div>Must be a String</div>
<div><strong>address[company] </strong></div><div>optional , nil allowed</div> | <div>Company</div><div>Must be a String</div>
<div><strong>address[first_address] </strong></div><div>optional</div> | <div>First address</div><div>Must be a String</div>
<div><strong>address[second_address] </strong></div><div>optional , nil allowed</div> | <div>Second address</div><div>Must be a String</div>
<div><strong>address[state] </strong></div><div>optional</div> | <div>State</div><div>Must be a String</div>
<div><strong>address[city] </strong></div><div>optional</div> | <div>City</div><div>Must be a String</div>
<div><strong>address[country] </strong></div><div>optional</div> | <div>Country</div><div>Must be a String</div>
<div><strong>address[zip] </strong></div><div>optional</div> | <div>Zip Code</div><div>Must be a String</div>
<div><strong>address[email] </strong></div><div>optional , nil allowed</div> | <div>E-mail</div><div>Must be a String</div>
<div><strong>address[phone] </strong></div><div>optional , nil allowed</div> | <div>Phone</div><div>Must be a String</div>


## Delete address

Delete an address in the user’s account level address book based on the address ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.4.0/users/494/addresses/1556?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 1556,
  "nickname": "Work",
  "first_name": "John",
  "last_name": "Doe",
  "company": "Testco LLC",
  "first_address": "301",
  "second_address": "W 6th Ave",
  "state": "Colorado",
  "city": "Denver",
  "country": "United States",
  "zip": "80204",
  "email": "john@example.com",
  "phone": "+1234567890",
  "default_billing": false,
  "default_shipping": true
}
```

### HTTP Request

`DELETE /api/v2.4.0/users/:user_id/addresses/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Address ID</div><div>Must be a number</div>
