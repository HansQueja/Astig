class Course < ApplicationRecord
    belongs_to :university
    belongs_to :department

    # Returns the complete details for a course
    def self.dashboard_data
        raw_data = Course.all

        data = []

        raw_data.each do |course|
            temp_data = {}
            university = University.find(course.university_id)
            department = Department.find(course.department_id)
            temp_data["Course"] = course.course_name
            temp_data["University"] = university.name
            temp_data["Department"] = department.name
            temp_data["ID"] = course.id 
            data.push(temp_data)
        end

        return data.as_json
    end
end
