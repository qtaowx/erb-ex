// CRUD http methods:
// Create -> POST
// Read -> GET
// Update -> PUT
// Delete -> DELETE

// Client - front end, send http request(get, post, put, delete) to server
// Server - back end, send responce to client

// 如何用postman做debug
// https://blog.csdn.net/K346K346/article/details/112354614

// Exercise 1: Design a REST API for an Online Bookstore
// 1. Books
// 	CRUD Operations:
// 	Create: Add a new book.
// 	Read:
// 	Retrieve all books.
// 	Retrieve a specific book by ID.
// 	Update: Modify an existing book by ID.
// 	Delete: Remove a book by ID.

POST /api/books
GET /api/books
GET /api/books/:id
PUT /api/books/:id
DELETE /api/books/:id

// 2. Authors
// 	CRUD Operations:
// 	Create: Add a new author.
// 	Read:
// 	Retrieve all authors.
// 	Retrieve a specific author by ID.
// 	Update: Modify an existing author by ID.
// 	Delete: Remove an author by ID.

POST /api/authors
GET /api/authors
GET /api/authors/:id
PUT /api/authors/:id
DELETE /api/authors/:id

// 3. Categories
// 	CRUD Operations:
// 	Create: Add a new category.
// 	Read:
// 	Retrieve all categories.
// 	Retrieve a specific category by ID.
// 	Update: Modify an existing category by ID.
// 	Delete: Remove a category by ID.

POST /api/categories
GET /api/categories
GET /api/categories/:id
PUT /api/categories/:id
DELETE /api/categories/:id

// 4. Reviews
// 	CRUD Operations:
// 	Create: Add a new review for a specific book.
// 	Read:
// 	Retrieve all reviews for a specific book.
// 	Retrieve a specific review by ID.
// 	Update: Modify an existing review by ID.
// 	Delete: Remove a review by ID.


POST /api/reviews
GET /api/reviews
GET /api/reviews/:id
PUT /api/reviews/:id
DELETE /api/reviews/:id

POST    /api/reviews?book_id=:id
POST    /api/books/:id/reviews
