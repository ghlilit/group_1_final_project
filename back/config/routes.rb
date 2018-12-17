Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :desks
  resources :bookings
  resources :rooms
  resources :users
  get 'timespots', to: 'timespots#index'
  get 'bookings/search/:room_id/:book_date', to: 'bookings#search'
  get 'desks/search/:user_id', to: 'desks#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
