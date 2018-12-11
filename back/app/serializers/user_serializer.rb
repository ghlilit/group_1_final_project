class UserSerializer < ActiveModel::Serializer
attributes :id,:fname,:lname,:email,:role,:bookings
end
