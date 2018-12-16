class UsersController < ApplicationController
before_action :authenticate_user!, except: [:show]
before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    if check_admin
       @users = User.all
       render json: @users
    else
       render json:{}, status: 401
    end 
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if check_admin
       @user.update(user_params)
       render json: @user
    else
       render json:{}, status:401
   end
 end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def check_admin
      return current_user.role == "admin"
    end
    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:fname, :lname, :role)
    end
end
