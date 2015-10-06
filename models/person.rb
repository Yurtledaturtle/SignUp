class Person < ActiveRecord::Base

validates_presence_of :email, message: "Email cannot be blank."
# validates :email, :email_format => {:message => 'please enter a valid email address'}

end
