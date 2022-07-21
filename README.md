# BLOG_API

## Description
This is a blog API with full Create, Read, Update, and Delete(CRUD) functionality being rendered using React.js. 

### Tech Stack

The Frontend
- React.js

In the Backend
- Server: Node.js, Express.js
- Database: MongoDB
- Deploy: Heroku


### RUN LOCALLY
Clone the project and follow all steps and have all dependencies to run the project locally.

frontend:
git clone https://github.com/fmdavis1/blogs-app-frontend

backend:
git clone https://github.com/fmdavis1/blog_api

### Install dependencies

 npm i:

- react-router-dom
- axios
- bootstrap


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



### ROUTES
- '/'  Landing Page
- '/home' Home Page
- '/Update/:id'  Update Blog by Id


### Wireframe

Made with Draw.io
![BlogsAppDiagram](../blogs-frontend/src/Image/BlogsAppDiagram.png)

### Endpoints

- To run backend uses Port 5000 as follows: http://localhost:5000 and add endpoints

- server app.get('/')return message "Server is running"

- usersRouter.post('/auth'): Creates Login.Login with username and password only. Token is sent to header for furher access.
- /auth
        - Login
            - CREATE

- usersRouter.post('/users')Registers users, usersSchema is used. Password is hashed. Token sent to headers for further access.
- /users
        - CREATE
            - Registration
        - READ
            - Get users
        - UPDATE
            - Update user
        - DELETE
            - Delete user
        

Blog('/blogs')
router.get('/blogs'): all public blog and private blogs are included, must be logged in and have a token.

router.post('/blogs'): Creates Blog with blogsSchema. Must have a token

router.put('/blogs/:id'): Updates blog with id, parameter(String) id is needed to update blog. Must have a token

router.get('/blogs/:id'): Returns blog associcated to id, parameter(String) id is required to find blog. Only blog associated with id appears. Must have a token

router.delete('/blogs/:id): Deletes blog associated with id, need a token for Authorization and parameter(string) id is required to delete blog


- /blogs
    - full CRUD
        - CREATE
            -Create blog
        - READ
            - Get blogs
        - READ BY ID
            - Get blog by id
        - UPDATE
            - Update blog
        - DELETE
            -Delete blog

### SCHEMAS

###  Blog Schema:
- username: type: String, required: true
- created_by: type: String, required: true,
- created_at:type:String,
- blog_title:type:String, required: true
- private:type:Boolean,default false

### User Schema:
- username:type:String,required:true,
- email:type:String,required:true,
- birthday:date,
- age:number,
- password:String:required:true

### Deploy
- Deployed to Heroku

