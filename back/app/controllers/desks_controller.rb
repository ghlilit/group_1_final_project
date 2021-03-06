class DesksController < ApplicationController
  before_action :set_desk, only: [:show, :update, :destroy]

  # GET /desks
  def index
    @desks = Desk.all

    render json: @desks
  end

  # GET /desks/1
  def show
    render json: @desk
  end

  # POST /desks
  def create
    @desk = Desk.new(desk_params)

    if @desk.save
      render json: @desk, status: :created, location: @desk
    else
      render json: @desk.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /desks/1
  def update
    if @desk.update(desk_params)
      render json: @desk
    else
      render json: @desk.errors, status: :unprocessable_entity
    end
  end

  # DELETE /desks/1
  def destroy
    @desk.destroy
  end

  def search
    @desk = Desk.where(user_id: params[:user_id])
    render json: @desk
    #
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_desk
      @desk = Desk.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def desk_params
      params.require(:desk).permit(:user_id, :name)
    end
end
