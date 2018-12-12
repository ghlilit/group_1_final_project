class RemoveBookstartFromBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :bookstart, :datetime
  end
end
