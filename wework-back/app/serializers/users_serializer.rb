class UsersSerializer < ActiveModel::Serializer
  attributes :id,:firstname,:lastname,:email,:description
  has_many:bookings
end
