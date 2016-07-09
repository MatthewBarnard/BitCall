Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      scope '/trello' do
        post '/' => 'api#trello_login'
      end
    end
  end
end
