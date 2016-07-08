class ApiController < ApplicationController
  def users
    render plain: 'You want the users :D'
  end
end
