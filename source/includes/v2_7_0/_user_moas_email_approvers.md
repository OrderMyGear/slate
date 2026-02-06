# User MOAS e-mail approvers

## List MOAS e-mail approvers

List all user MOAS email approvers based on a user ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/users/1/moas_email_approvers?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "moas_email_approvers": [
    {
      "id": 579,
      "email": "hello@world.com",
      "created_at": "2015-11-22T10:00:00-06:00"
    }
  ]
}
```

### HTTP Request

`GET /api/v2.7.0/users/:user_id/moas_email_approvers`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>


## Create MOAS e-mail approver

Create a new MOAS e-mail approver for the user.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/users/123/moas_email_approvers?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "email": "hello@world.com"
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "email": "hello@world.com",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`POST /api/v2.7.0/users/:user_id/moas_email_approvers`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>email</strong></div><div>required</div> | <div>Approver e-mail address</div><div>Must be a String</div>

## Update MOAS e-email approver

Update specific MOAS e-mail approver for a user account based on the user ID and MOAS approver ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/users/579/moas_email_approvers/123?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "email": "test@world.com"
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "email": "test@world.com",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`PUT /api/v2.7.0/users/:user_id/moas_email_approvers/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>MOAS Approver ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>email</strong></div><div>required</div> | <div>Approver e-mail address</div><div>Must be a String</div>

## Delete MOAS e-mail approver

Delete a specific MOAS approver for a user account based on the user ID and MOAS approver ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/users/579/moas_email_approvers/123?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "email": "hello@world.com",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`DELETE /api/v2.7.0/users/:user_id/moas_email_approvers/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>MOAS approver ID</div><div>Must be a number</div>
