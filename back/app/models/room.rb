class Room < ApplicationRecord
    has_many :bookings
    validates_associated :bookings
end
