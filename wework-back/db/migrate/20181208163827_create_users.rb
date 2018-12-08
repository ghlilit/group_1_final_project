class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :role
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :description
      t.string :password

      t.timestamps
    end
  end
end
