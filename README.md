<hr>

## **_Address Book API_**

<hr>

Here I use

<ul>
<li>Node Js - for server running</li>
<li>Express Js - for create API easily</li>
<li>Dotenv - for environement varriable</li>
<li>Cors - for middleware</li>
<li>Colors - for colorful message</li>
<li>Mongoose - for use mongoDB easily</li>
<li>Nodemon - for simply restarts node application</li>
<li>Json Web Token - for secuire api</li>
<li>validator - for mongoose schema validation</li>
</ul>

In this application has 6 API end-point

Application Base URL

```bash
https://address-book-api-vd.onrender.com
```

> First hit this url to check the application is running or not

<br>

If you want to test these api by thunder client vs extention first download "thunder-collection_Address Book.json" from "thunder_client_api_test" folder and import this in thunder client.

<ol>
<li>

### _Get all contact or specifice contact as your query API_

```bash
https://address-book-api-vd.onrender.com/api/v1/contact
```

This get api end-point provide all contact or specific contact as your query. Here dafault limit 2 which means in one page show only 2 contact. Your can query by fields, limit, sort, page, status . Query perameter link like this

```bash
https://address-book-api-vd.onrender.com/api/v1/contact?limit=0&sort=name&fields=name,phone&status=inactive
```

</li>
<li>

### _Create contact API_

```bash
https://address-book-api-vd.onrender.com/api/v1/contact
```

> This api is secure by jwt. So first the hitting the get all contact api end-point, you will find the token number as a token named key. Copy only the token value and send by headers as Authorization key and value will be the given format - Brearer your_token_number

<br>

This post api create new contact given body data. This body data is validate by mongoose schema. Schema design is

```javascript
{
  "name": string,
  "phone": string,
  "email": string,
  "address": string,
  "status": string
}
```

Give the example below:-

```bash
{
  "name": "Oliver",
  "phone": "765768987",
  "email": "oliver@gmail.com",
  "address": "United States",
  "status": "active"
}
```

</li>
<li>

### _Create bulk contact API_

```bash
https://address-book-api-vd.onrender.com/api/v1/bulk-contact
```

> This api is secure by jwt. So first the hitting the get all contact api end-point, you will find the token number as a token named key. Copy only the token value and send by headers as Authorization key and value will be the given format - Brearer your_token_number

<br>

This post api create multiple contact given array of object body data. This body data is validate by mongoose schema. Schema design is

Give the example below:-

```bash
[
  {
  "name": "Oliver",
  "phone": "7657689871",
  "email": "oliver@gmail.com",
  "address": "United States",
  "status": "active"
  },
  {
  "name": "Oliver2",
  "phone": "7657689872",
  "email": "oliver2@gmail.com",
  "address": "United States",
  "status": "active"
  }
]
```

</li>
<li>

### _Get the specific contact API end-point_

```bash
https://address-book-api-vd.onrender.com/api/v1/contact/:id
```

Example API

```bash
https://address-book-api-vd.onrender.com/api/v1/contact/635214641558f7413125811e
```

</li>
<li>

### _Update the specific contact API end-point_

```bash
https://address-book-api-vd.onrender.com/api/v1/contact/:id
```

> This api is secure by jwt. So first the hitting the get all contact api end-point, you will find the token number as a token named key. Copy only the token value and send by headers as Authorization key and value will be the given format - Brearer your_token_number

<br>

Example API

```bash
https://address-book-api-vd.onrender.com/api/v1/contact/635214641558f7413125811e
```

This api get the id form url params and get the update data from the req body. Api work in patch method not put. Body example like this

```bash
{
 "status": "inactive"
}

```

</li>

<li>

### _Delete the specific contact API end-point_

```bash
https://address-book-api-vd.onrender.com/api/v1/contact/:id
```

> This api is secure by jwt. So first the hitting the get all contact api end-point, you will find the token number as a token named key. Copy only the token value and send by headers as Authorization key and value will be the given format - Brearer your_token_number

<br>

Example API

```bash
https://address-book-api-vd.onrender.com/api/v1/contact/635214641558f7413125811e
```

This api get the id form url params and get the update data from the req body. Body example like this

</li>
</ol>

[Know about me](https://imshama.com)
