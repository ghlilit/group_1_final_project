class User < ApplicationRecord
         # Include default devise modules.
        devise :database_authenticatable, :registerable,
               :recoverable, :rememberable
        include DeviseTokenAuth::Concerns::User
end
