class SessionsController < ApplicationController
    def create
        @member = Member.where(email: params[:email]).first
        if @member&.valid_password?(params[:password])
        render json: @member.as_json(only: [:id,:email,:authentication_token,:session_id])
        else
            head(:unauthorized)
        end
    end

    def destroy
        p current_member
        p current_user
        @member = Member.where(id:params[:id]).first
        @member.authentication_token = nil
    end
end