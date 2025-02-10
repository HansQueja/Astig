class Course < ApplicationRecord
    belongs_to :university
    belongs_to :department

    # Returns the complete details for a course
    def self.dashboard_data
        raw_data = Course.left_joins(:university).left_joins(:department)

        data = []

        raw_data.each do |course|
            temp_data = {}
            temp_data["Course"] = course.course_name
            temp_data["University"] = course.university.name
            temp_data["Department"] = course.department.name
            temp_data["ID"] = course.id 
            data.push(temp_data)
        end

        return data.as_json
    end
end
