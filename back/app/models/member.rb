class Member < ApplicationRecord
    has_one  :desk, dependent: :destroy
    has_many :bookings, dependent: :destroy
    validates_associated :bookings
    validates_associated :desk
end
