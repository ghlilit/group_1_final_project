class RoomSerializer < ActiveModel::Serializer
  attributes :id,:price,:setup,:capability
  has_many :bookings
end
