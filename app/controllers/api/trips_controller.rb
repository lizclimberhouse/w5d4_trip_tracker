class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:update, :destroy]

  def index
    render json: Trip.all
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else
      render json: { errors: trip.errors }, status: :unprocessable_entity
    end
  end

  def update
    trip = Trip.find(params[:id])
    trip.update(taken: !trip.taken)
    render json: trip
  end

  def destroy
    Trip.find(params[:id]).destroy
    render json: { message: 'Trip Deleted' }
  end

  private
    def trip_params
      params.require(:trip).permit(:name, :taken)
    end

    def set_trip
      @trip = Trip.find(params[:id])
    end
end
