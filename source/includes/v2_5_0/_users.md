# Users

## List users

List all users in the store. Keep in mind, the response will return up to 500 records on a single page and you will need
to use "per_page" and "page" URL parameters to see all the records.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.5.0/users?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "users": [
    {
      "id": 579,
      "name": "John Doe",
      "username": "johndoe",
      "balance": "12.5",
      "active": true,
      "creation_date": "2015-11-22T10:00:00-06:00",
      "last_edited_date": "2016-07-01T22:53:03-06:00"
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

`GET /api/v2.5.0/users`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>groups </strong></div><div>optional</div> | <div>Filter by groups</div><div>Must be one of: Array, String</div>
<div><strong>date_created_from </strong></div><div> optional </div> | <div>Filter by date created from</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then UTC will be used by default.</div>
<div><strong>date_created_to </strong></div><div> optional </div> | <div>Filter by date created to</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then UTC will be used by default.</div>
<div><strong>username </strong></div><div>optional</div> | <div>Filter by username</div><div>Must be a String</div>
<div><strong>active </strong></div><div>optional</div> | <div>Filter by active/inactive users</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>page </strong></div><div>optional</div> | <div>Pagination page number</div><div>Must be a number</div>
<div><strong>per_page </strong></div><div>optional</div> | <div>Pagination per page number</div><div>Must be a number</div>

## Show user

Show you the specific information for a user account based on the user ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.5.0/users/579?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "username": "johndoe",
  "first_name": "John",
  "last_name": "Doe",
  "active": true,
  "confirmed": true,
  "email": "johndoe@email.com",
  "timezone": "America/Denver",
  "phone": "+1234567890",
  "company": "BSI",
  "title": "Support Leader",
  "groups": [
    "Public"
  ],
  "balance": "12.5",
  "orders": [],
  "notes": [
    {
      "id": 123,
      "note": "hello world",
      "username": "API",
      "created_at": "2021-04-20T10:20:09.000Z"
    }
  ],
  "moas_sms_approvers": [
    {
      "id": 123,
      "phone": "1-800-123-12345",
      "created_at": "2021-04-20T10:20:09.000Z"
    }
  ],
  "moas_email_approvers": [
    {
      "id": 123,
      "email": "email@example.com",
      "created_at": "2021-04-20T10:20:09.000Z"
    }
  ],
  "moas_activation_amount": "0.00",
  "creation_date": "2015-11-22T10:00:00-06:00",
  "last_edited_date": "2016-07-01T22:53:03-06:00",
  "enable_sms_notifications": true,
  "avalara_tax_exemption_reason": "A"
}
```

### HTTP Request

`GET /api/v2.5.0/users/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>

## Create user

Create a brand new user account in the store.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.5.0/users?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "user": {
    "username": "johndoe",
    "first_name":"John",
    "last_name":"Doe",
    "active":true,
    "email":"johndoe@email.com",
    "timezone": "America/Denver",
    "phone":"+1234567890",
    "company":"BSI",
    "title":"Support Leader",
    "groups":["Public"],
    "balance":12.5,
    "password":"12345678",
    "enable_sms_notifications":true,
    "dont_send_confirmation_email":false,
    "avalara_tax_exemption_reason": "A",
    "cuf_1": "helloworld"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "username": "johndoe",
  "first_name": "John",
  "last_name": "Doe",
  "active": true,
  "confirmed": true,
  "email": "johndoe@email.com",
  "timezone": "America/Denver",
  "phone": "+1234567890",
  "company": "BSI",
  "title": "Support Leader",
  "groups": [
    "Public"
  ],
  "balance": "12.5",
  "orders": [],
  "notes": [],
  "moas_sms_approvers": [],
  "moas_email_approvers": [],
  "moas_activation_amount": "0.00",
  "creation_date": "2015-11-22T10:00:00-06:00",
  "last_edited_date": "2016-07-01T22:53:03-06:00",
  "enable_sms_notifications": true,
  "avalara_tax_exemption_reason": "A",
  "cuf_1": "helloworld"
}
```

### HTTP Request

`POST /api/v2.5.0/users`

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>user </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>user[username] </strong></div><div>required</div> | <div>Unique username</div><div>Must be a String</div>
<div><strong>user[first_name] </strong></div><div>required</div> | <div>First name</div><div>Must be a String</div>
<div><strong>user[last_name] </strong></div><div>required</div> | <div>Last name</div><div>Must be a String</div>
<div><strong>user[email] </strong></div><div>required</div> | <div>Email</div><div>Must be a String</div>
<div><strong>user[timezone] </strong></div><div>optional</div> | <div>Time zone</div><div>Must be a String. If no Time zone is set, it will default to America/Denver.</div><div><a target="_blank" href="https://storage.googleapis.com/kb.brightstores.com/images/available_timezones.pdf">The list of available time zones</a></div>
<div><strong>user[phone] </strong></div><div>optional , nil allowed</div> | <div>Phone number</div><div>Must be a String</div>
<div><strong>user[company] </strong></div><div>optional , nil allowed</div> | <div>Company</div><div>Must be a String</div>
<div><strong>user[title] </strong></div><div>optional , nil allowed</div> | <div>Title</div><div>Must be a String</div>
<div><strong>user[groups] </strong></div><div>optional , nil allowed</div> | <div>Assign groups</div><div>Must be an array of String</div>
<div><strong>user[balance] </strong></div><div>optional , nil allowed</div> | <div>Balance</div><div>Must be a float</div>
<div><strong>user[note] </strong></div><div>optional , nil allowed</div> | <div>Create comment</div><div>Must be a String</div>
<div><strong>user[password] </strong></div><div>optional , nil allowed</div> | <div>Password</div><div>Must be a String</div>
<div><strong>user[enable_sms_notifications] </strong></div><div>optional</div> | <div>SMS Notification</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>user[moas_activation_amount] </strong></div><div>optional</div> | <div>MOAS activation amount (requires enabled MOAS feature).</div><div>Must be a float</div>
<div><strong>user[cuf_<custom user field id>] </strong></div><div>optional , nil allowed</div> | <div>Custom User Field</div><div>Must be a String</div>
<div><strong>user[dont_send_confirmation_email] </strong></div><div>optional</div> | <div>Don't send user confirmation email</div><div>Must be one of: true, false, 1, 0</div><div>Only valid if no password is sent. If a password is sent it will be ignored. If there's no password and the field is set to true, the initial confirmation email is not sent</div>
<div><strong>user[avalara_tax_exemption_reason] </strong></div><div>optional</div> | <div>Tax Exemption Reason (Avalara)</div><div>This field only works with the Avalara sales tax integration and will send a tax exemption reason to Avalara for them to determine if tax is exempt or not when an order is being processed for the user. Valid values: A, B, C, D, E, F, G, H, I, J, K, L, M, N, P, Q, R, TAXABLE. <a href="https://help.avalara.com/Avalara_AvaTax_Update/Exemption_Reason_Matrix_for_US_and_Canada" target="_blank">Avalara Docs.</a></div>

## Update user

Update information for a specific user account based on the user ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.5.0/users/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "user": {
    "username": "johndoe",
    "first_name":"John",
    "last_name":"Doe",
    "active":true,
    "email":"johndoe@email.com",
    "timezone": "America/Denver",
    "phone":"+1234567890",
    "company":"BSI",
    "title":"Support Leader",
    "groups":["Public"],
    "balance":12.5,
    "password":"12345678",
    "enable_sms_notifications": true,
    "avalara_tax_exemption_reason": "A",
    "cuf_1": "12345678"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "username": "johndoe",
  "first_name": "John",
  "last_name": "Doe",
  "active": true,
  "confirmed": true,
  "email": "johndoe@email.com",
  "timezone": "America/Denver",
  "phone": "+1234567890",
  "company": "BSI",
  "title": "Support Leader",
  "groups": [
    "Public"
  ],
  "balance": "12.5",
  "orders": [],
  "notes": [],
  "moas_sms_approvers": [],
  "moas_email_approvers": [],
  "moas_activation_amount": "0.00",
  "creation_date": "2015-11-22T10:00:00-06:00",
  "last_edited_date": "2016-07-01T22:53:03-06:00",
  "enable_sms_notifications": true,
  "avalara_tax_exemption_reason": "A",
  "cuf_1": "12345678"
}
```

### HTTP Request

`PUT /api/v2.5.0/users/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>user </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>user[username] </strong></div><div>optional</div> | <div>Unique username</div><div>Must be a String</div>
<div><strong>user[first_name] </strong></div><div>optional</div> | <div>First name</div><div>Must be a String</div>
<div><strong>user[last_name] </strong></div><div>optional</div> | <div>Last name</div><div>Must be a String</div>
<div><strong>user[email] </strong></div><div>optional</div> | <div>Email</div><div>Must be a String</div>
<div><strong>user[timezone] </strong></div><div>optional</div> | <div>Time zone</div><div>Must be a String. If no Time zone is set, it will default to America/Denver.</div><div><a target="_blank" href="https://storage.googleapis.com/kb.brightstores.com/images/available_timezones.pdf">The list of available time zones</a></div>
<div><strong>user[phone] </strong></div><div>optional , nil allowed</div> | <div>Phone number</div><div>Must be a String</div>
<div><strong>user[company] </strong></div><div>optional , nil allowed</div> | <div>Company</div><div>Must be a String</div>
<div><strong>user[title] </strong></div><div>optional , nil allowed</div> | <div>Title</div><div>Must be a String</div>
<div><strong>user[groups] </strong></div><div>optional , nil allowed</div> | <div>Assign groups</div><div>Must be an array of String</div>
<div><strong>user[balance] </strong></div><div>optional , nil allowed</div> | <div>Balance</div><div>Must be a float</div>
<div><strong>user[increase_balance] </strong></div><div>optional , nil allowed</div> | <div>Increase Balance</div><div>Must be a float</div>
<div><strong>user[decrease_balance] </strong></div><div>optional , nil allowed</div> | <div>Decrease Balance</div><div>Must be a float</div>
<div><strong>user[note] </strong></div><div>optional , nil allowed</div> | <div>Create comment</div><div>Must be a String</div>
<div><strong>user[password] </strong></div><div>optional , nil allowed</div> | <div>Password</div><div>Must be a String</div>
<div><strong>user[moas_activation_amount] </strong></div><div>optional</div> | <div>MOAS activation amount (requires enabled MOAS feature).</div><div>Must be a float</div>
<div><strong>user[enable_sms_notifications] </strong></div><div>optional</div> | <div>SMS Notification</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>user[avalara_tax_exemption_reason] </strong></div><div>optional</div> | <div>Tax Exemption Reason (Avalara)</div><div>This field only works with the Avalara sales tax integration and will send a tax exemption reason to Avalara for them to determine if tax is exempt or not when an order is being processed for the user. Valid values: A, B, C, D, E, F, G, H, I, J, K, L, M, N, P, Q, R, TAXABLE. <a href="https://help.avalara.com/Avalara_AvaTax_Update/Exemption_Reason_Matrix_for_US_and_Canada" target="_blank">Avalara Docs.</a></div>
<div><strong>user[cuf_<custom user field id>] </strong></div><div>optional , nil allowed</div> | <div>Custom User Field</div><div>Must be a String</div>

## Delete user

Delete a specific user account based on the user ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.5.0/users/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "username": "johndoe",
  "first_name": "John",
  "last_name": "Doe",
  "active": true,
  "confirmed": true,
  "email": "johndoe@email.com",
  "timezone": "America/Denver",
  "phone": "+1234567890",
  "company": "BSI",
  "title": "Support Leader",
  "groups": [],
  "balance": "12.5",
  "orders": [],
  "notes": [],
  "moas_sms_approvers": [],
  "moas_email_approvers": [],
  "moas_activation_amount": "0.00",
  "creation_date": "2015-11-22T10:00:00-06:00",
  "enable_sms_notifications": true,
  "avalara_tax_exemption_reason": "A",
  "last_edited_date": "2016-07-01T22:53:03-06:00",
}
```

### HTTP Request

`DELETE /api/v2.5.0/users/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
