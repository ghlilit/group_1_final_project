class User < ApplicationRecord
        def admin?
          return role == 'admin'
        end 
         # Include default devise modules.
        devise :database_authenticatable, :registerable,
               :recoverable, :rememberable
        include DeviseTokenAuth::Concerns::User
end
