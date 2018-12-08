class BookingSerializer < ActiveModel::Serializer
  attributes :id, :bookstart, :bookend
  has_one :user
  has_one :room
end
