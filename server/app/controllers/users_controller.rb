class UsersController < ApplicationController
    def index
        data = University.all

        render json: {
            message: data
        }, status: :ok
    end
end
