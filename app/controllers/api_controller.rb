class ApiController < ApplicationController
  before_action :authenticate, except: :connect
  after_action :set_access_control_headers

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = %w{GET POST OPTIONS}.join(',')
  end
  # ----------------------------------------
  # API CONNECTION
  # ----------------------------------------
  def connect
    user = nil
    if params[:api_key].blank?
      user = User.new
      user.save
    else
      user = authenticate
    end
    render plain: user.call_id, status: 201
  end

  # ----------------------------------------
  # LOGINS Trello/Toggl
  # ----------------------------------------
  def trello_login
    render plain: 'Hey :D'
  end


  def authenticate
    authentication_user = User.find_by call_id: params[:api_key]
    if authentication_user.blank?
      render plain: 'Not Authenticated', status: 401 and return
    else
      authentication_user
    end
  end

end
