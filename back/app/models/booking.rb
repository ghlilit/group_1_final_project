class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room
  belongs_to :timespot
  validate :checkavailable
   def checkavailable
     res = Booking.where(timespot_id: timespot_id, book_date: book_date, room_id: room_id)
     p res.first
      if res.first != nil
        errors.add(:book_date, "A booking exists")
    end
  end
end
