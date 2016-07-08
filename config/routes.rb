Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      scope '/users' do
        get '/' => 'api#users'
      end
    end
  end
end
