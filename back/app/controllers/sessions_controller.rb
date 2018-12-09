class SessionsController < ApplicationController
    def create
        @member = Member.where(email: params[:email]).first
        if @member&.valid_password?(params[:password])
        render json: @member.as_json(only: [:id,:email,:authentication_token])
        else
            head(:unauthorized)
        end
    end

    def destroy
        current_member.authentication_token = nil
    end
end