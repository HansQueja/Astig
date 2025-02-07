# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

#university = University.create!(
#    name: "Polytechnic University of the Philippines",
#    institution_type: 0,
#    org: "PUP ADS",
#    org_link: "https://www.facebook.com/PUPADSOfficial"
#)

#department = Department.create!(
#    name: "College of Computer and Information Sciences"
#)
#
#course = Course.create!(
#    university_id: university.id,
#    department_id: department.id,
#    course_name: "Bachelor in Science in Computer Science"
#)