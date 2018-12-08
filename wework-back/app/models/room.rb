class Room < ApplicationRecord
    validates :price, presence: true
    has_many :bookings, dependent: :destroy
    validates_associated :bookings
end
