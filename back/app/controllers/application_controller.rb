class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Cookies
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  # def get_current_user
  #   return nil unless cookies[:auth_headers]
  #   auth_headers = JSON.parse cookies[:auth_headers]
  #   # expiration_datetime = DateTime.strptime(auth_headers['expiry'], '%s')
  #   current_user = User.find_by(uid: auth_headers['uid'])
  #   p "the Current USer" + current_user.fname
  #   if current_user &&
  #      current_user.tokens.has_key?(auth_headers['client'])
  #      @current_user = current_user
  #   end

  #   @current_user
  # end
  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:fname, :lname, :role])
  end
end
