# User MOAS sms approvers

## List MOAS sms approvers

List all user MOAS sms approvers based on a user ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/users/1/moas_sms_approvers?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "moas_sms_approvers": [
    {
      "id": 579,
      "phone": "+1-518-555-0154",
      "created_at": "2015-11-22T10:00:00-06:00"
    }
  ]
}
```

### HTTP Request

`GET /api/v2.6.0/users/:user_id/moas_sms_approvers`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>



## Create MOAS sms approver

Create a new MOAS sms approver for the user.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/users/123/moas_sms_approvers?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "phone": "+1-518-555-0154"
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "phone": "+1-518-555-0154",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`POST /api/v2.6.0/users/:user_id/moas_sms_approvers`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>sms</strong></div><div>required</div> | <div>Approver sms address</div><div>Must be a String</div>

## Update MOAS sms approver

Update specific MOAS sms approver for a user account based on the user ID and MOAS approver ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/users/579/moas_sms_approvers/123?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "phone": "+1-518-555-0154"
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "phone": "+1-518-555-0154",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`PUT /api/v2.6.0/users/:user_id/moas_sms_approvers/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>MOAS Approver ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>sms</strong></div><div>required</div> | <div>Approver sms address</div><div>Must be a String</div>

## Delete MOAS sms approver

Delete a specific MOAS approver for a user account based on the user ID and MOAS approver ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/users/579/moas_sms_approvers/123?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "phone": "+1-518-555-0154",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`DELETE /api/v2.6.0/users/:user_id/moas_sms_approvers/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>MOAS approver ID</div><div>Must be a number</div>
