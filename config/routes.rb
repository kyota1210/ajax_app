Rails.application.routes.draw do
  root to: "/" 
  post 'posts' , to: 'posts#create'
  get 'posts/:id', to: 'posts#checked'
end
