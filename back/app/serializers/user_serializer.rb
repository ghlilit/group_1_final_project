class UserSerializer < ActiveModel::Serializer
    attributes :id,:fname,:lname,:email,:role,:desk
end
