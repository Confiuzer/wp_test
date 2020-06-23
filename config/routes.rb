Rails.application.routes.draw do

  root to: 'home#index'
  get '/play_game', to: 'home#play_game'

  resources :plays
  resources :games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
