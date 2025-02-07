class DashboardsController < ApplicationController
    def index
        data = User.all

        render json: {
            data: "This is the dashboard.",
            user: data
        }, status: :ok
    end
end
