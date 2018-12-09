Rails.application.routes.draw do
  resources :desks
  resources :bookings
  resources :rooms
  resources :members, only: [:create,:index, :show, :update, :destroy]
  resources :sessions, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
