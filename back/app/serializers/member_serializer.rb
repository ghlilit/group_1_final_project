class MemberSerializer < ActiveModel::Serializer
  attributes :email,:id,:name,:bookings,:role,:desk
  has_many :bookings
  has_one  :desk
end
