#  Product option groups 

## List of option groups for product

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/22287/option_groups?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "enabled": true, "option_groups": [ { "id": 4, "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } ] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/option_groups`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


## Show option group

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/22287/option_groups/4?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 47204, "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Group ID</div><div> Must be a number. </div>


## Create group

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/products/22287/option_groups?token=GXzAxWkkyYLsESGQTU15 { "option_group": { "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup", "wrap_options": true, "option_ids": [12, 15] } 
```

### HTTP Request

`POST /api/v1.1/products/:product_id/option_groups`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_group </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>option_group[name] </strong></div><div> required </div> | <div>Name of option group</div><div> Must be a String </div>
<div><strong>option_group[wrap_options] </strong></div><div> optional , nil allowed </div> | <div>Wrap options</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option_group[option_ids] </strong></div><div> optional , nil allowed </div> | <div>Wrap options</div><div> Must be an Array of Integer </div>


## Update group

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/option_groups/5?token=GXzAxWkkyYLsESGQTU15 { "option_group": { "name": "OptionGroup2", "option_ids": [12] } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup2", "wrap_options": true, "option_ids": [12] } 
```

### HTTP Request

`PATCH /api/v1.1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_group </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>option_group[name] </strong></div><div> optional </div> | <div>Name of option group</div><div> Must be a String </div>
<div><strong>option_group[wrap_options] </strong></div><div> optional , nil allowed </div> | <div>Wrap options</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option_group[option_ids] </strong></div><div> optional , nil allowed </div> | <div>Wrap options</div><div> Must be an Array of Integer </div>


## Update group

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/22287/option_groups/5?token=GXzAxWkkyYLsESGQTU15 { "option_group": { "name": "OptionGroup2", "option_ids": [12] } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup2", "wrap_options": true, "option_ids": [12] } 
```

### HTTP Request

`PUT /api/v1.1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_group </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>option_group[name] </strong></div><div> optional </div> | <div>Name of option group</div><div> Must be a String </div>
<div><strong>option_group[wrap_options] </strong></div><div> optional , nil allowed </div> | <div>Wrap options</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>option_group[option_ids] </strong></div><div> optional , nil allowed </div> | <div>Wrap options</div><div> Must be an Array of Integer </div>


## Delete group

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/products/22287/option_groups/5?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 5, "name": "OptionGroup2", "wrap_options": true, "option_ids": [] } 
```

### HTTP Request

`DELETE /api/v1.1/products/:product_id/option_groups/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Group ID</div><div> Must be a number. </div>


