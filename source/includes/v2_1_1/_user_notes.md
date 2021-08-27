#  User notes

## List notes

To list notes for a specific user please use [users show](#show-user) endpoint.

## Create user note

Create a new note for the user.

```shell
curl "https://subdomain.bsites-staging.com/api/v2.1.1/users/123/notes?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "note": "helloworld"
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "username": "API",
  "note": "helloworld",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`POST /api/v2.1.1/users/:user_id/notes`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>note</strong></div><div>required</div> | <div>Comment body</div><div>Must be a String</div>

## Update user note

Update specific user note for a user account based on the user ID and note ID you supply.

```shell
curl "https://subdomain.bsites-staging.com/api/v2.1.1/users/579/notes/123?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "note": "helloworld"
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "username": "API",
  "note": "helloworld",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`PUT /api/v2.1.1/users/:user_id/notes/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Note ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>note</strong></div><div>required</div> | <div>Comment body</div><div>Must be a String</div>


## Delete user note

Delete a specific user note for a user account based on the user ID and note ID you supply.

```shell
curl "https://subdomain.bsites-staging.com/api/v2.1.1/users/579/notes/123?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "username": "API",
  "note": "helloworld",
  "created_at": "2015-11-22T10:00:00-06:00"
}
```

### HTTP Request

`DELETE /api/v2.1.1/users/:user_id/notes/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>user_id </strong></div><div>required</div> | <div>User ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Note ID</div><div>Must be a number</div>
