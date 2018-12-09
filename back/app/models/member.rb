class Member < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  acts_as_token_authenticatable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    has_one  :desk, dependent: :destroy
    has_many :bookings, dependent: :destroy
    validates_associated :bookings
    validates_associated :desk
end
