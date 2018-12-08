class BookingSerializer < ActiveModel::Serializer
  attributes :id,:bookstart,:bookend,:member_id,:room_id
end
