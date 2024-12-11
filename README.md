# School Management Setup

## Prerequisites

Before you start setting up the project locally, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MySQL** (for database setup)

---

## Steps to Set Up the Project Locally

1. **Clone the Repository**  
   First, clone this repository to your local machine by running the following command in your terminal:
   ```bash
   git clone https://github.com/wegoare/school-management.git
2.
Install Dependencies
Navigate into the project directory and install the required dependencies:

cd school-management
npm install

3.node index.js
4.
POST - Add a New School
URL: http://localhost:3000/api/addSchool
Method: POST
This endpoint will add a new school to the database. You need to provide the relevant details in the request body, such as school name, address, latitude, and longitude.

GET - List Schools by Distance
URL: http://localhost:3000/api/listSchools?latitude=50.730610&longitude=-73.935242
Method: GET
This endpoint returns a list of schools ordered by their distance from the given latitude and longitude.
eg-[
    {
        "id": 2,
        "name": "Valley High School",
        "address": "123 Elm Street",
        "latitude": 48.7128,
        "longitude": -74.006,
        "distance": 224.43
    },
    {
        "id": 1,
        "name": "Green Valley High School",
        "address": "123 Elm Street",
        "latitude": 40.7128,
        "longitude": -74.006,
        "distance": 1113.94
    },
    {
        "id": 6,
        "name": "Summit Elementary",
        "address": "654 Willow Way",
        "latitude": 40.7128,
        "longitude": -74.006,
        "distance": 1113.94
    },
    {
        "id": 4,
        "name": "Pinecrest Secondary School",
        "address": "789 Oak Drive",
        "latitude": 41.8781,
        "longitude": -87.6298,
        "distance": 1436.45
    },
    {
        "id": 7,
        "name": "Evergreen High School",
        "address": "987 Aspen Road",
        "latitude": 47.6062,
        "longitude": -122.332,
        "distance": 3472.43
    },
    {
        "id": 3,
        "name": "Cedar Grove Academy",
        "address": "456 Maple Avenue",
        "latitude": 34.0522,
        "longitude": -118.244,
        "distance": 4005.64
    },
    {
        "id": 5,
        "name": "Lakeside Middle School",
        "address": "321 Birch Lane",
        "latitude": 37.7749,
        "longitude": -122.419,
        "distance": 4037.17
    }
]
