class AddColumnSetupToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :setup, :string
  end
end
