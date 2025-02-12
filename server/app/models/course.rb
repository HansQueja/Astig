class Course < ApplicationRecord
    belongs_to :university
    belongs_to :department

    # Returns the complete details for a course
    def self.dashboard_data(page)
        raw_data = Course.left_joins(:university).left_joins(:department).page(page)

        data = raw_data.map do |course|
            {
                "Course" => course.course_name,
                "University" => course.university.name,
                "Department" => course.department.name,
                "ID" => course.id
            }
        end

        return data.as_json
    end
end
