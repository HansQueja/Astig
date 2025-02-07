namespace :db do
    desc "Populate the course table"
    task :populate_course_db => :environment do
        require 'csv'

        hash_table = Hash.new

        CSV.foreach('course_ncr.csv', headers: true) do |row|
            university = University.find_by(name:row["university"])
            department = Department.find_by(name:row["department"])
            row["university"] = university
            row["department"] = department
            Course.create!(row.to_hash)
        end
    end
end