class CreateUniversities < ActiveRecord::Migration[8.0]
  def change
    create_table :universities do |t|
      t.string :name, null: false
      t.integer :institution_type, null: false
      t.string :org
      t.string :org_link
      
      t.timestamps
    end
  end
end
