class User < ApplicationRecord
<<<<<<< HEAD

#  def admin?
#   return current_user.role == 'admin'
#  end
=======
       
 def admin?
  return current_user.role == 'admin'
 end
>>>>>>> d7c545959e47dc974f874bc8102059c7dd7b3cc3
# Include default devise modules.
 validates :role, presence: true
 has_many :bookings, dependent: :destroy
 devise :database_authenticatable, :registerable,
       :recoverable, :rememberable, :validatable
include DeviseTokenAuth::Concerns::User

end
