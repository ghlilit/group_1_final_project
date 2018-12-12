class CreateTimespots < ActiveRecord::Migration[5.2]
  def change
    create_table :timespots do |t|
      t.string :hours
    end
  end
end
