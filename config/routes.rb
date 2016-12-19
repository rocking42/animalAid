Rails.application.routes.draw do

  get 'animals/index'

  get 'animals/show'

  resources :animals
  root 'animals#index'
  get '/home' => 'animals#index'


  resources :users

end
