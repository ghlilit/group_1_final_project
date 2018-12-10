class User < ApplicationRecord
<<<<<<< HEAD
# Include default devise modules.
validates :role, presence: true
has_many :bookings, dependent: :destroy
devise :database_authenticatable, :registerable,
:recoverable, :rememberable, :validatable
include DeviseTokenAuth::Concerns::User
=======
        def admin?
          return role == 'admin'
        end 
         # Include default devise modules.
        devise :database_authenticatable, :registerable,
               :recoverable, :rememberable
        include DeviseTokenAuth::Concerns::User
>>>>>>> 880a820622fda40ecca89b5832df0d0373e3e54a
end
