class User < ApplicationRecord
# Include default devise modules.
validates :role, presence: true
has_many :bookings, dependent: :destroy
devise :database_authenticatable, :registerable,
:recoverable, :rememberable, :validatable
include DeviseTokenAuth::Concerns::User
end
