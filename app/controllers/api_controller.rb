class ApiController < ApplicationController
  before_action :authenticate, except: :connect
  before_action :set_access_control_headers

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
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
      set_access_control_headers
      render plain: 'Not Authenticated', status: 401 and return
    else
      authentication_user
    end
  end

end
