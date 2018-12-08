class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.timestamp :bookstart
      t.timestamp :bookend
      t.references :users, foreign_key: true
      t.references :rooms, foreign_key: true

      t.timestamps
    end
  end
end
