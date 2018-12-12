class RemoveBookendFromBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :bookend, :datetime
  end
end
