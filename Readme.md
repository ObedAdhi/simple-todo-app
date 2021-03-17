# Simple Todo App

## Day 1 Progress
- Learning basic Ruby syntax
- Installing needed software
- Setting up rails on Windows
- Use postgreSQL as database
- Creating git repository
- Push initial commit
- Creating Task model, controller, and migration using scaffold

## Gems considered to use
- Devise
- Active-records

## To Do

### Server
- creating model
- how to use association
- how to setup database
- how to do validation
- hashing password (bcrypt)
- creating access token (JWT)
- controller for user (register, login)
- authentication/authorization
- controller for task (create, read all, sort by date, sort by priority, sort by desc, update, change status, delete)

### Client
- Initialization (using Vue cli)
- creating UI (using vanilla Bootstrap)
- Wiring server and client
- Validation alert

## List of used command
- rails new server --api --database=postgresql
- rails db:create
- rails g scaffold Task title:string due_date:date priority:integer status:string description:string
