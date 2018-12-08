class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.integer :price
      t.integer :capability

      t.timestamps
    end
  end
end
