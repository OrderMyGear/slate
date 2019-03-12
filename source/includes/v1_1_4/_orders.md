#  Orders

## List orders

List all orders placed in your store.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.4/orders?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "orders": [
    {
      "order_id": 1,
      "shipping_method": "Best Way",
      "tracking": "12234tracking2123",
      "date": "2015-08-28T08:34:37-06:00",
      "status": "new",
      "customer": "test@johndoe.com",
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

`GET /api/v1.1.4/orders`

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>status </strong></div><div> optional </div> | <div>Filter by order status. Available statuses: new, billed, paid, in_progress, split, shipped, completed, back_ordered, canceled, moas_pending</div>
<div><strong>customer </strong></div><div> optional </div> | <div>Filter by customer</div><div> Must be one of: Array, String. </div>
<div><strong>date_from </strong></div><div> optional </div> | <div>Filter by date created from</div><div> Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” </div>
<div><strong>date_to </strong></div><div> optional </div> | <div>Filter by date created to</div><div> Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” </div>
<div><strong>page </strong></div><div> optional </div> | <div>Pagination page number</div><div> Must be a number. </div>
<div><strong>per_page </strong></div><div> optional </div> | <div>Pagination per page number</div><div> Must be a number. </div>


## Show order

Show you information pertaining to one order based on the order ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.4/orders/1?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "order_id": 1,
  "date": "2015-08-25T05:06:36-06:00",
  "status": "new",
  "custom_data_collections": [
    {
      "title": "Add a Gift Card To Your Order",
      "attributes": [
        {
          "key": "Please select your Gift Card below:",
          "value": "Forever 21"
        }
      ],
      "price_modifier": {
        "modifier_type": "$",
        "amount": "25.0"
      }
    }
  ],
  "customer_email": "test@johndoe.com",
  "customer_id": null,
  "username": "Guest",
  "item_total": "4703.0",
  "grand_total": "3069.15",
  "shipping_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "test@johndoe.com",
    "phone": "1234123456"
  },
  "shipping_address": {
    "first_address": "2658 East 26th Street",
    "company": "Testco LLC",
    "second_address": "John Doe",
    "city": "Brooklyn",
    "state": "New York",
    "country": "United States",
    "zip": "11235"
  },
  "billing_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "test@johndoe.com",
    "phone": "1234123456"
  },
  "billing_address": {
    "first_address": "2658 East 26th Street",
    "company": "Testco LLC",
    "second_address": "John Doe",
    "city": "Brooklyn",
    "state": "New York",
    "country": "United States",
    "zip": "11235"
  },
  "payment": {
    "id": 4305,
    "authorization": "A70A9B840C12",
    "created_at": "2016-06-23T10:19:22-06:00",
    "amount": "82.0",
    "state": "refunded",
    "details": {
      "method": "credit card",
      "card type": "Visa",
      "card": "**** **** **** 1111",
      "amount": "$82.00"
    }
  },
  "payments": [
    {
      "id": 4305,
      "authorization": "A10AA3EC513B",
      "created_at": "2016-06-23T10:19:22-06:00",
      "amount": "82.0",
      "state": "refunded",
      "details": {
        "method": "credit card",
        "card type": "Visa",
        "card": "**** **** **** 1111",
        "amount": "$82.00"
      }
    },
    {
      "id": 6215,
      "authorization": "A10AA3EC513A",
      "created_at": "2017-03-10T04:29:10-07:00",
      "amount": "-82.0",
      "state": "completed",
      "details": {
        "method": "credit card",
        "card type": "Visa",
        "card": "**** **** **** 1111",
        "type": "Credit",
        "amount": "-$82.00"
      }
    }
  ],
  "shipment": {
    "tracking_number": "12234tracking2123",
    "cost": "0.0",
    "created_at": "2015-08-25T05:06:23-06:00",
    "shipping_method": "Best Way",
    "ship_date": "2016-08-25",
    "in_hands_date": "2018-06-15"
  },
  "line_items": [
    {
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
      "logos": [{
          "name": "fedex",
          "charge": "10.0",
          "image_url": "/uploads/website/line_item_logo/image/05-01-2018/762/fedex.png",
          "location": {
            "id": 4,
            "name": "Top"
          },
          "decoration": {
            "custom_text": "",
            "font": "",
            "size": {
              "name": "Medium",
              "price_modifier": "1.75",
              "setup_charge": "25.0"
            },
            "color": {
              "number": 1,
              "price_modifier": "0.0",
              "setup_charge": "0.0"
            },
            "colors": [
              {
                "color_name": "#00ff00",
                "color_type": "hex",
                "hex_value": "#00ff00"
              }
            ]
          }
        },
        {
          "name": "cop",
          "charge": null,
          "image_url": "/uploads/website/line_item_logo/image/05-01-2018/763/11.png",
          "location": {
            "id": 5,
            "name": "Right Chest"
          },
          "decoration": {
            "custom_text": "",
            "font": "",
            "size": {
              "name": "Medium",
              "price_modifier": "1.75",
              "setup_charge": "25.0"
            },
            "color": {
              "number": 1,
              "price_modifier": "0.0",
              "setup_charge": "0.0"
            },
            "colors": [
              {
                "color_name": "#4e00ff",
                "color_type": "hex",
                "hex_value": "#4e00ff"
              }
            ]
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
      "split_items":[
          {
              "id":27,
              "quantity":10,
              "tracking_number":"500",
              "status":"In progress",
              "ship_date":"2017-03-16",
              "shipping_method":"Best Way123"
          },
          {
              "id":36,
              "quantity":8,
              "tracking_number":"Test123123",
              "status":"In progress",
              "ship_date":"2017-03-08",
              "shipping_method":"UPS Today Dedicated Courier"
          }
       ],
      "decoration_method": {
        "name": "Embroidery",
        "price_modifier": "2.5"
      },
      "gift_certificate": null,
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
      "split_items": [],
      "decoration_method": null,
      "gift_certificate": {
        "first_name": "John",
        "last_name": "Doe",
        "message": "Nice work on the job today!",
        "expires_at": "2018-12-04T09:15:50.000-07:00",
        "code": "9FBF1F5B7029432",
        "amount": "10.0"
      }
    }
  ],
  "coupons_adjustments": [],
  "balance_adjustments": [],
  "custom_adjustments": [
    {
      "note": "quantity discount",
      "amount": "-1080.0",
      "modifier_type": "$"
    },
    {
      "note": "quantity discount",
      "amount": "-120.0",
      "modifier_type": "$"
    },
    {
      "note": "quantity discount",
      "amount": "-60.0",
      "modifier_type": "$"
    },
    {
      "note": "quantity discount",
      "amount": "-180.0",
      "modifier_type": "$"
    },
    {
      "note": "quantity discount",
      "amount": "-360.0",
      "modifier_type": "$"
    }
  ],
  "required_adjustments": [
    {
      "note": "Setup Charge for helloworld",
      "amount": "20.0",
      "modifier_type": "$"
    },
    {
      "note": null,
      "amount": "146.15",
      "modifier_type": "$"
    },
    {
      "note": null,
      "amount": "0.0",
      "modifier_type": "$"
    }
  ],
  "notes": []
}
```

### HTTP Request

`GET /api/v1.1.4/orders/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>


## Update order

Update order information based on the order ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.4/orders/1?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "order": {
    "status": "completed",
    "shipping_method": "Ground",
    "tracking_number": "AA123456789",
    "note": "new note",
    "send_shipping_confirmation": true,
    "shipping_address": {"first_address":"2658 East 26th Street"},
    "shipping_contact":{"first_name":"John"},
    "ship_date": "2016-12-20",
    "in_hands_date": "2018-12-20",
    "billing_contact":{"first_name":"John"},
    "billing_address": {
      "company": "Testco LLC",
      "first_address": "2658 East",
      "second_address": "26th Street",
      "city": "Brooklyn",
      "state": "New York",
      "country": "United States",
      "zip": "11235"
    }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "order_id": 9,
  "date": "2015-07-07T07:13:56-06:00",
  "status": "completed",
  "custom_data_collections": [
    {
      "title": "Add a Gift Card To Your Order",
      "attributes": [
        {
          "key": "Please select your Gift Card below:",
          "value": "Hot Topic"
        }
      ],
      "price_modifier": {
        "modifier_type": "$",
        "amount": "25.0"
      }
    }
  ],
  "customer_email": "storetesting16@email.brightstores.com",
  "customer_id": 429,
  "username": "trex",
  "item_total": "75.0",
  "grand_total": "136.11",
  "shipping_contact": {
    "first_name": "John",
    "last_name": "Rex",
    "email": "storetesting16@email.brightstores.com",
    "phone": "303-555-8989"
  },
  "shipping_address": {
    "company": "Testco LLC",
    "first_address": "2658 East 26th Street",
    "second_address": "",
    "city": "Spokane",
    "state": "Washington",
    "country": "United States",
    "zip": "99208"
  },
  "billing_contact": {
    "first_name": "John",
    "last_name": "Rex",
    "email": "storetesting16@email.brightstores.com",
    "phone": "303-555-8989"
  },
  "billing_address": {
    "company": "Testco LLC",
    "first_address": "2658 East",
    "second_address": "26th Street",
    "city": "Brooklyn",
    "state": "New York",
    "country": "United States",
    "zip": "11235"
  },
  "payment": {
    "id": 4305,
    "authorization": "A70A9B840C12",
    "created_at": "2016-06-23T10:19:22-06:00",
    "amount": "82.0",
    "state": "refunded",
    "details": {
      "method": "credit card",
      "card type": "Visa",
      "card": "**** **** **** 1111",
      "amount": "$82.00"
    }
  },
  "payments": [
    {
      "id": 4305,
      "authorization": "A10AA3EC513B",
      "created_at": "2016-06-23T10:19:22-06:00",
      "amount": "82.0",
      "state": "refunded",
      "details": {
        "method": "credit card",
        "card type": "Visa",
        "card": "**** **** **** 1111",
        "amount": "$82.00"
      }
    },
    {
      "id": 6215,
      "authorization": "A10AA3EC513A",
      "created_at": "2017-03-10T04:29:10-07:00",
      "amount": "-82.0",
      "state": "completed",
      "details": {
        "method": "credit card",
        "card type": "Visa",
        "card": "**** **** **** 1111",
        "type": "Credit",
        "amount": "-$82.00"
      }
    }
  ],
  "shipment": {
    "tracking_number": "AA123456789",
    "cost": "25.55",
    "created_at": "2015-07-07T07:13:27-06:00",
    "shipping_method": "Ground",
    "ship_date": "2016-12-20",
    "in_hands_date": "2018-12-20"
  },
  "line_items": [
    {
      "name": "Shoes",
      "final_sku": "Shoes-1234",
      "final_internal_id": "431234",
      "tax_code": "12345",
      "quantity": 2,
      "product_price": "37.5",
      "options_price": "0.0",
      "total_price": "75.0",
      "tax_price": "3.75",
      "unit_price": "37.5",
      "product_options": [
        {
          "option_name": "Size",
          "sub_option_name": "Small"
        },
        {
          "option_name": "Color",
          "sub_option_name": "White"
        }
      ],
      "logos": [{
          "name": "fedex",
          "charge": "10.0",
          "image_url": "/uploads/website/line_item_logo/image/05-01-2018/762/fedex.png",
          "location": {
            "id": 4,
            "name": "Top"
          },
          "decoration": null
        },
        {
          "name": "cop",
          "charge": null,
          "image_url": "/uploads/website/line_item_logo/image/05-01-2018/763/11.png",
          "location": {
            "id": 5,
            "name": "Right Chest"
          },
          "decoration": null
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
      "split_items":[],
      "decoration_method": null
    }
  ],
  "coupons_adjustments": [],
  "balance_adjustments": [],
  "custom_adjustments": [],
  "required_adjustments": [
    {
      "note": "add a gift card to your order",
      "amount": "25.0",
      "modifier_type": "$"
    },
    {
      "note": "sales tax",
      "amount": "7.88",
      "modifier_type": "$"
    },
    {
      "note": "shipment",
      "amount": "25.55",
      "modifier_type": "$"
    },
    {
      "note": "shipping sales tax",
      "amount": "2.68",
      "modifier_type": "$"
    }
  ],
  "notes": [
    {
      "username": "API",
      "created_at": "2016-02-08T04:45:18-07:00",
      "note": "new note"
    }
  ]
}
```

### HTTP Request

`PUT /api/v1.1.4/orders/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>order </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>order[status] </strong></div><div> optional </div> | <div>Order status. Available statuses: new, billed, paid, in_progress, split, shipped, completed, back_ordered, canceled, moas_pending</div>
<div><strong>order[shipping_method] </strong></div><div> optional </div> | <div>Shipping Method</div><div> Must be a String </div>
<div><strong>order[tracking_number] </strong></div><div> optional </div> | <div>Tracking Number</div><div> Must be a String </div>
<div><strong>order[ship_date] </strong></div><div> optional </div> | <div>Ship Date</div><div> Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” </div>
<div><strong>order[in_hands_date] </strong></div><div> optional </div> | <div>In Hands Date</div><div> Invalid date format. Valid format: “YYYY-MM-DD hh:mm:ss” or “YYYY-MM-DD” </div>
<div><strong>order[note] </strong></div><div> optional </div> | <div>Create Comment</div><div> Must be a String </div>
<div><strong>order[send_shipping_confirmation] </strong></div><div> optional </div> | <div>If true, send a shipping confirmation email with updated order data</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>order[shipping_address] </strong></div><div> optional </div> | <div>Shipping Address</div><div> Must be a Hash </div>
<div><strong>order[shipping_address][company] </strong></div><div> optional </div> | <div>Company</div><div> Must be a String </div>
<div><strong>order[shipping_address][first_address] </strong></div><div> optional </div> | <div>Address Line 1</div><div> Must be a String </div>
<div><strong>order[shipping_address][second_address] </strong></div><div> optional </div> | <div>Address Line 2</div><div> Must be a String </div>
<div><strong>order[shipping_address][state] </strong></div><div> optional </div> | <div>State</div><div> Must be a String </div>
<div><strong>order[shipping_address][city] </strong></div><div> optional </div> | <div>City</div><div> Must be a String </div>
<div><strong>order[shipping_address][country] </strong></div><div> optional </div> | <div>Country</div><div> Must be a String </div>
<div><strong>order[shipping_address][zip] </strong></div><div> optional </div> | <div>Zip Code</div><div> Must be a String </div>
<div><strong>order[shipping_contact] </strong></div><div> optional </div> | <div>Shipping Contact</div><div> Must be a Hash </div>
<div><strong>order[shipping_contact][first_name] </strong></div><div> optional </div> | <div>First Name</div><div> Must be a String </div>
<div><strong>order[shipping_contact][last_name] </strong></div><div> optional </div> | <div>Last Name</div><div> Must be a String </div>
<div><strong>order[shipping_contact][email] </strong></div><div> optional </div> | <div>Email</div><div> Must be a String </div>
<div><strong>order[shipping_contact][phone] </strong></div><div> optional </div> | <div>Phone</div><div> Must be a String </div>
<div><strong>order[billing_address] </strong></div><div> optional </div> | <div>Billing Address</div><div> Must be a Hash </div>
<div><strong>order[billing_address][company] </strong></div><div> optional </div> | <div>Company</div><div> Must be a String </div>
<div><strong>order[billing_address][first_address] </strong></div><div> optional </div> | <div>Address Line 1</div><div> Must be a String </div>
<div><strong>order[billing_address][second_address] </strong></div><div> optional </div> | <div>Address Line 2</div><div> Must be a String </div>
<div><strong>order[billing_address][state] </strong></div><div> optional </div> | <div>State</div><div> Must be a String </div>
<div><strong>order[billing_address][city] </strong></div><div> optional </div> | <div>City</div><div> Must be a String </div>
<div><strong>order[billing_address][country] </strong></div><div> optional </div> | <div>Country</div><div> Must be a String </div>
<div><strong>order[billing_address][zip] </strong></div><div> optional </div> | <div>Zip Code</div><div> Must be a String </div>
<div><strong>order[billing_contact] </strong></div><div> optional </div> | <div>Billing Contact</div><div> Must be a Hash </div>
<div><strong>order[billing_contact][first_name] </strong></div><div> optional </div> | <div>First Name</div><div> Must be a String </div>
<div><strong>order[billing_contact][last_name] </strong></div><div> optional </div> | <div>Last Name</div><div> Must be a String </div>
<div><strong>order[billing_contact][email] </strong></div><div> optional </div> | <div>Email</div><div> Must be a String </div>
<div><strong>order[billing_contact][phone] </strong></div><div> optional </div> | <div>Phone</div><div> Must be a String </div>


## Cancel order

Cancel one specific order based on the order ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.4/orders/1/cancel?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT
```

> The above request returns JSON structured like this:

```json
{
  "success": [
    "Set status to 'Canceled'",
    "Restock inventory",
    "Refund balance for budget 'Sales'",
    "Updated product statistics",
    "Order canceled by System. IP: 127.0.0.1"
  ],
  "errors": [
    "Unable to refund payment"
  ]
}
```

### HTTP Request

`PUT /api/v1.1.4/orders/:id/cancel`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Order ID</div><div> Must be a number. </div>
