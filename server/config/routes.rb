Rails.application.routes.draw do
  resources :tasks
  resources :users
  post '/login', to: "users#login"
  get '/tasks-by-duedate', to: "tasks#index_by_due_date"
  get '/tasks-by-priority', to: "tasks#index_by_priority"
  get '/tasks-by-description', to: "tasks#index_by_description"
  get '/filter-by-priority/:priority', to: "tasks#filter_by_priority"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
