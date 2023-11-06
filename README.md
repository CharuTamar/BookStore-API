# BookStore-API
RESTful API using Node.js for managing books


This is a simple RESTful API developed using Node.js, Express and MongoDB for managing books.
Features: 
- Add a new book (title, author, summary)
- View a list of all books
- View details of a specific book by its ID
- Update a book's details
- Delete a book


## Usage ##
Just clone or download and run **npm install** and then create one file with .env name in the project's root directory and in that add your MONGODB_URI and finally run **npm start** to start the server.


## API Endpoints ##
- POST /books : For adding a new book
```http
POST http://localhost:9000/books/
```

- GET /books : Fetch list of all books
```http
GET http://localhost:9000/books/
```

- GET /books/:id : List details of a specific book
```http
GET http://localhost:9000/books/65491387ae062a7374040f80 
```

- PUT /books/:id : Update book's details
```http
PUT http://localhost:9000/books/65491387ae062a7374040f80
```

- DELETE /books/:id : Delete a book
```http
DELETE http://localhost:9000/books/65491387ae062a7374040f80
```


## Status Codes

Following status codes are used in the API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |