class AddTimespotRefToBookings < ActiveRecord::Migration[5.2]
  def change
    add_reference :bookings, :timespot, foreign_key: true
  end
end

