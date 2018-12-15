class User < ApplicationRecord
# Include default devise modules.
 validates :role, presence: true
 validates :fname, format: { with: /\A[a-zA-Z0-9]+\Z/ }, presence: true
 validates :lname, format: { with: /\A[a-zA-Z0-9]+\Z/ }, presence: true
 has_one :desk
 has_many :bookings, dependent: :destroy
 devise :database_authenticatable, :registerable,
       :recoverable, :rememberable, :validatable,:trackable
include DeviseTokenAuth::Concerns::User

end
