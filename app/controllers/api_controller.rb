class ApiController < ApplicationController
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
