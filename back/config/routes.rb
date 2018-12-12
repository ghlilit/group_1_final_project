Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'bookings/:room_id/:book_date', to: 'bookings#search'
  get 'timespots', to: 'timespots#index'
  resources :desks
  resources :bookings
  resources :rooms
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
