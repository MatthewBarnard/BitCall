class ApiController < ApplicationController
  after_action :set_access_control_headers

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = "*"
    headers['Access-Control-Request-Method'] = %w{GET POST OPTIONS}.join(",")
  end
  # ----------------------------------------
  # API TEST
  # ----------------------------------------
  def connect
    render plain: 'Hello from the API :D', status: 200
  end

  # ----------------------------------------
  # LOGINS Trello/Toggl
  # ----------------------------------------
  def trello_login
    render plain: 'Hey :D'
  end
end
