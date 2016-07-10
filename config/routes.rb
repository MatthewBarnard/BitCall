Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      get '/connect' => 'api#connect'
      scope ':api_key' do
        get '/connect' => 'api#connect'
        scope '/trello' do
          post '/authenticate' => 'api#trello_login'
        end
      end
    end
  end
end

