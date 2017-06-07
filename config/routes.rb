Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :update, :index]
      resource :session, only: [:create, :destroy]
      resources :groups, only: [:show, :index, :create, :destroy, :update]
      resources :invitations, only: [:create, :destroy]
    end

end
