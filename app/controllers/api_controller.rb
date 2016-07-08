class ApiController < ApplicationController
  def users
    render json: User.all
  end
end
