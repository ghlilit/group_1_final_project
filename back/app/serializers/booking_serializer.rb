class BookingSerializer < ActiveModel::Serializer
  attributes :timespot_id,:user_id,:book_date, :timespot, :room

  def timespot
    @timespot = Timespot.find(self.object.timespot_id)
    @timespot.hours
  end

  def room
    @room = Room.find(self.object.room_id)
    @room.name
  end
end