Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :desks
  resources :bookings
  resources :rooms
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
