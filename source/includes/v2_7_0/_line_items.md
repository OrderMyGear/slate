#  Line items

## List line items

List all line items for a specific order ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/orders/123/line_items?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "line_items": [
    {
      "id": 1234,
      "name": "Product 1",
      "final_sku": "sku",
      "final_internal_id": "431234",
      "tax_code": "12345",
      "quantity": 18,
      "product_price": "150.0",
      "options_price": "5.0",
      "total_price": "2790.0",
      "tax_price": "7.75",
      "unit_price": "155.0",
      "product_id": 10,
      "product_options": [
        {
          "option_id": 25,
          "sub_option_id": 152,
          "option_name": "Size",
          "option_type": "size",
          "sub_option_name": "X-Small"
        }
      ],
      "vendors": [
        {
          "id": 579,
          "name": "The Willy Wonka Company",
          "address1": "2010 Oompa-Loompa drive",
          "address2": "",
          "city": "Sweetstown",
          "state": "Texas",
          "zip_code": "99099",
          "phone": "123123123123",
          "email": "test@test.com",
          "account_number": "account123123",
          "asi_number": "asi123456"
        }
      ],
      "logos": [{
          "name": "fedex",
          "charge": "10.0",
          "image_url": "https://assets.mybrightsites.com/uploads/website/line_item_logo/image/05-01-2018/762/fedex.png",
          "supplier_id": "VENDOR123",
          "location": {
            "id": 4,
            "name": "Top"
          }
        },
        {
          "name": "cop",
          "charge": null,
          "image_url": "https://assets.mybrightsites.com/uploads/website/line_item_logo/image/05-01-2018/763/11.png",
          "supplier_id": null,
          "location": {
            "id": 5,
            "name": "Right Chest"
          }
        }
      ],
      "product_personalizations": [
        {
          "title": "Enter Name Here",
          "attributes": [
            {
              "key": "Name",
              "value": ""
            }
          ],
          "price_modifier": {
            "modifier_type": "$",
            "amount": "1.99"
          }
        }
      ],
      "gift_certificate": null,
      "note": "Product note example"
    },
    {
      "id": 10139,
      "name": "Gift Certificate example",
      "final_sku": "GCE1",
      "quantity": 1,
      "product_price": "0.0",
      "options_price": "0.0",
      "total_price": "10.0",
      "tax_price": null,
      "unit_price": "10.0",
      "pdf_status": "not_available",
      "pdf_file_url": null,
      "product_id": 44422,
      "final_internal_id": null,
      "tax_code": "12345",
      "product_options": [],
      "logos": [],
      "product_personalizations": [],
      "gift_certificate": {
        "first_name": "John",
        "last_name": "Doe",
        "message": "Nice work on the job today!",
        "expires_at": "2018-12-04T09:15:50.000-07:00",
        "code": "9FBF1F5B7029432",
        "amount": "10.0"
      },
      "note": "Product note example"
    }
  ]
}
```

### HTTP Request

`GET /api/v2.7.0/orders/:order_id/line_items`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>


## Show line item

Show the specific line item on an order based on the line item ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.7.0/orders/1/line_items/1234?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 1234,
  "name": "Product 1",
  "final_sku": "sku",
  "final_internal_id": "431234",
  "tax_code": "12345",
  "quantity": 18,
  "product_price": "150.0",
  "options_price": "5.0",
  "total_price": "2790.0",
  "tax_price": "7.75",
  "unit_price": "155.0",
  "product_id": 10,
  "product_options": [
    {
      "option_id": 25,
      "sub_option_id": 152,
      "option_name": "Size",
      "option_type": "size",
      "sub_option_name": "X-Small"
    }
  ],
  "vendors": [
    {
      "id": 579,
      "name": "The Willy Wonka Company",
      "address1": "2010 Oompa-Loompa drive",
      "address2": "",
      "city": "Sweetstown",
      "state": "Texas",
      "zip_code": "99099",
      "phone": "123123123123",
      "email": "test@test.com",
      "account_number": "account123123",
      "asi_number": "asi123456"
    }
  ],
  "logos": [{
      "name": "fedex",
      "charge": "10.0",
      "image_url": "https://assets.mybrightsites.com/uploads/website/line_item_logo/image/05-01-2018/762/fedex.png",
      "supplier_id": "VENDOR123",
      "location": {
        "id": 4,
        "name": "Top"
      }
    },
    {
      "name": "cop",
      "charge": null,
      "image_url": "https://assets.mybrightsites.com/uploads/website/line_item_logo/image/05-01-2018/763/11.png",
      "supplier_id": null,
      "location": {
        "id": 5,
        "name": "Right Chest"
      }
    }
  ],
  "product_personalizations": [
    {
      "title": "Enter Name Here",
      "attributes": [
        {
          "key": "Name",
          "value": ""
        }
      ],
      "price_modifier": {
        "modifier_type": "$",
        "amount": "1.99"
      }
    }
  ],
  "gift_certificate": null,
  "note": "Product note example"
}
```

### HTTP Request

`GET /api/v2.7.0/orders/:order_id/line_items/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>order_id </strong></div><div>required</div> | <div>Order ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Line Item ID</div><div>Must be a number</div>
