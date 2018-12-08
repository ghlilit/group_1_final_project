class RoomSerializer < ActiveModel::Serializer
  attributes :id,:price,:bookings
  has_many :bookings
end
