Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:show, :index, :create, :destroy, :update]
    resources :invitations, only: [:create, :destroy]
  end

end
