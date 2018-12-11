class RoomSerializer < ActiveModel::Serializer
  attributes :id,:name,:price,:bookings,:setup
end
