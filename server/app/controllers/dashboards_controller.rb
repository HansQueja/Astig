class DashboardsController < ApplicationController
    def index

        course_data = Course.dashboard_data

        render json: {data: course_data}, status: :ok
    end
end
