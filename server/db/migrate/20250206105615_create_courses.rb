class CreateCourses < ActiveRecord::Migration[8.0]
  def change
    create_table :courses do |t|
      t.references :university, null: false, foreign_key: { to_table: :universities, column: :university_id }
      t.references :department, null: false, foreign_key: { to_table: :departments, column: :department_id }

      t.string :course_name, null: false

      t.timestamps
    end
  end
end
