# Green Field Project

# HomeSweetHome

HomeSweetHome is a web page that users can find homes. They can create their own account and do modifications regarding the home publications. In other words, the user has the ability to update, delete and get and post the announcements he wants about homes.

# Technologies used

React, Node.js, MongoDB, Bootstrap, Express.js


This web application allows users to add and view houses for listing. Users can create an account, log in, and start adding houses they want to list. Each house listing includes details such as an image, title, city, address, description, and price. Users can also view all their listed houses in their profile.

Features
User authentication: Users can create an account, log in, and log out securely.
Add House: Authenticated users can add houses they want to list for rent or sale.
View House Listings: Users can view all the houses they have listed on their profile page.
Delete House: Users can remove houses from their listings if they are no longer available.
Technologies Used
Frontend: The frontend of this web application is built using React, a popular JavaScript library for building user interfaces. React Router is used for handling client-side routing, and Bootstrap is used for styling the components.

Backend: The backend is built using Node.js with Express.js, providing a RESTful API to handle house listing operations. User data and house listings are stored in a MongoDB database.

User Authentication: User authentication is implemented using JSON Web Tokens (JWT) for secure user sessions.

API Endpoints

GET /homes: Get all house listings.
POST /homes: Add a new house listing.
DELETE /homes/:id: Delete a house listing with the given ID.
PUT /homes/:id: Update a house listing with the given ID.
GET /homes/:userId: Get all house listings for a specific user.