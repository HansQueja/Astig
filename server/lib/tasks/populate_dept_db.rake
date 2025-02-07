namespace :db do
    desc "Populate the department table"
    task :populate_dept_db => :environment do
        require 'csv'

        hash_table = Hash.new

        CSV.foreach('department_ncr.csv', headers: true) do |row|
            if hash_table[row["name"]]
                next
            else
                hash_table[row["name"]] = 0
                Department.create!(row.to_hash)
            end
        end
    end
end