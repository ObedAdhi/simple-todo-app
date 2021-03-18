# Simple Todo App


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


## Gems considered to use
- Devise
- Active-records


## To Do

### Server
- how to do validation
- hashing password (bcrypt)
- creating access token (JWT)
- authentication/authorization
- how to create new route
- patch task status only (task controller)
- get all task by user id
- sort task by due date (task controller)
- sort task by due priority (task controller)
- sort task by due description (task controller)

### Client
- Initialization (using Vue cli)
- creating UI (using vanilla Bootstrap)
- register
- log in
- homepage (showing own task list)
- add task page
- edit task page
- sort by *** button / dropdown
- Wiring server and client
- Validation alert


## Done
- creating model
- how to use association
- how to setup database
- controller for task (create, read all, sort by date, sort by priority, sort by desc, update, change status, delete) (handled by scafold)
- controller for user (register, login) (handled by devise)


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

## API Routes
- POST /users > register new user
- GET  /login > login to existing user