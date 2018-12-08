class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :role
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
