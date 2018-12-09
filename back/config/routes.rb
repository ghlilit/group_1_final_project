Rails.application.routes.draw do
  resources :desks
  resources :bookings
  resources :rooms
  resources :members
  resources :sessions, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
