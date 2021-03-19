# Simple Todo App

## Note
### Starting server
- $ cd server
- $ bundle install
- $ rails db:create
- $ rails db:migrate
- $ rails s

### Starting client
- $ cd client (from root directory)
- $ npm install
- $ npm run serve

## API Routes
|Command|Route|Function|
|---|---|---|
|POST   |  /users     |register new user| 
|POST   |  /login     |login to existing user|
|GET    |  /tasks     |get all tasks|
|POST   |  /tasks     |create new task|
|PUT    |  /tasks/:id |edit task detail|
|PATCH  |  /tasks/:id |change task status|
|DELETE |  /tasks/:id |delete task|
|GET    |  /tasks-by-duedate      |get all tasks and sort by earliest day|
|GET    |  /tasks-by-priority     |get all tasks and sort by highest priority|
|GET    |  /tasks-by-description  |get all tasks and sort description from a to z|

## Day 1 Progress
- Learning basic Ruby syntax
- Installing needed software
- Setting up rails on Windows
- Use postgreSQL as database
- Creating git repository
- Push initial commit
- Creating Task model, controller, and migration using scaffold
- Create Database
- Migrate Task
- Install devise
- Generate User using devise
- Migrate User

## Day 2 Progress
- Uninstaling devise
- Removing User model and migration created by devise
- Generate User model, controller, and migration using scaffold
- Migrate User
- Adding bcrypt to user model
- Adding login function to user controller
- Initializing vue
- Wiring login and register
- Wiring CRUD client-server
- Change task status only 
- Add tasks sorting function

## Day 3 Progress
- Add navbar
- Add navigation guard

## Gems considered to use
- Devise
- Active-records


## To Do

### Server
- how to do validation
- creating access token (JWT)
- authentication/authorization
- alert due date task

### Client
- Validation alert


## Done

### Server
- creating model
- how to use association
- how to setup database
- controller for task (create, read all, sort by date, sort by priority, sort by desc, update, change status, delete) (handled by scafold)
- controller for user (register, login) (handled by scaffold)
- hashing password (bcrypt)
- how to create new route
- patch task status only (task controller)
- get all task by user id
- sort task by due date (task controller)
- sort task by due priority (task controller)
- sort task by due description (task controller)

### Client
- Initialization (using Vue cli)
- register
- log in
- homepage (showing own task list)
- add task page
- edit task page
- sort by *** button / dropdown
- creating UI (using vanilla Bootstrap) ongoing
- Wiring server and client ongoing


## List of used command
- rails new server --api --database=postgresql
- rails db:create
- rails db:migrate
- rails g scaffold User email:string password_digest:string
- rails g scaffold Task title:string due_date:date priority:integer status:string description:string user:references
- rails routes
- bundle install
- rails generate devise:install
- rails generate devise User
- rails g migration add_user_id_to_tasks user_id:integer:index
- vue create client

