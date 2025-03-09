class Course < ApplicationRecord
    belongs_to :university
    belongs_to :department

    # Returns the complete details for a course
    def self.dashboard_data
        raw_data = Course.left_joins(:university).left_joins(:department)

        data = raw_data.map do |course|
            {
                "Program" => course.course_name,
                "Institution" => course.university.name,
                "Department" => course.department.name,
                "ID" => course.id
            }
        end

        return data.as_json
    end
end
