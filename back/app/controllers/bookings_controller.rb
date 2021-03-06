class BookingsController < ApplicationController
  # before_action :authenticate_user!, except:[:index, :show, :search, :create]
  before_action :set_booking, only: [:show, :update,:destroy]

  # GET /bookings
  def index
    @bookings = Booking.all
    render json: @bookings
  end

  # GET /bookings/1
  def show
    render json: @booking
  end

  # POST /bookings
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: @booking, status: :created, location: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
  end

  def search
    @bookings = Booking.where(room_id: params[:room_id], book_date: params[:book_date])
    render json: @bookings
  end

  def userSearch
    @bookings = Booking.where(user_id: params[:user_id])
    render json: @bookings
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end
    def check_premium
      return current_user.role === "premium"
    end
    # Only allow a trusted parameter "white list" through.
    def booking_params
      params.require(:booking).permit(:user_id, :room_id, :book_date, :timespot_id)
    end
end
