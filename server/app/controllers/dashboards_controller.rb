class DashboardsController < ApplicationController
    def index
        data = Course.dashboard_data

        render json: data, status: :ok
    end
end
