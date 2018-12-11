class RoomSerializer < ActiveModel::Serializer
  attributes :id,:name,:price,:bookings,:setup,:capacity
end
