class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.timestamps
      t.string :username, null: false
      t.string :name, null: false
      t.string "email", default: "", null: false
    end
  end
end
