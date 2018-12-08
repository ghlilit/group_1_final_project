class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.integer :price
      t.string :setup
      t.integer :capacity

      t.timestamps
    end
  end
end
