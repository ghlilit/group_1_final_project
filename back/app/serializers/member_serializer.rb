class MemberSerializer < ActiveModel::Serializer
  attributes :id,:name,:bookings,:role,:desk
  has_many :bookings
  has_one  :desk
end
