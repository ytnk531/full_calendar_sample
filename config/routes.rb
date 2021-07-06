Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "js", to: "js#index", as: :js_index
  get "js_other", to: "js#other", as: :js_other
end
