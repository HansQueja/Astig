class DashboardsController < ApplicationController
    def index

        page = params[:page] || 1

        data = Course.dashboard_data(page)
        pagination_data = Course.page(page)

        render json: {
            data: data,
            pagination: {
                current_page: pagination_data.current_page,
                per_page: pagination_data.limit_value,
                total_pages: pagination_data.total_pages,
                total_items: pagination_data.total_count,
                next_page: pagination_data.next_page,
                previous_page: pagination_data.prev_page
            }
        }, status: :ok
    end
end
