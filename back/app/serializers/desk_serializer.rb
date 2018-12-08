class DeskSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :member
end
