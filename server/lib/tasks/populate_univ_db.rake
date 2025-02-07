namespace :db do
    desc "Populate the university table"
    task :populate_univ_db => :environment do
        require 'csv'

        hash_table = Hash.new
        counter = 0

        CSV.foreach('university_ncr.csv', headers: true) do |row|
            if hash_table[row["name"]]
                next
            else
                hash_table[row["name"]] = 0
                University.create!(row.to_hash)
            end
        end
    end
end