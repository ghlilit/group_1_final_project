class TimespotsController < ApplicationController
    def index
        @timespots = Timespot.all
        render json: @timespots
    end
end