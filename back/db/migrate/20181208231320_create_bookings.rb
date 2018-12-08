class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.timestamp :bookstart
      t.timestamp :bookend
      t.references :member, foreign_key: true
      t.references :room, foreign_key: true

      t.timestamps
    end
  end
end
