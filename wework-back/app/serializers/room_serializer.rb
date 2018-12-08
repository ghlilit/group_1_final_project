class RoomSerializer < ActiveModel::Serializer
  attributes :id,:price,:capability
  has_many :bookings
end
