class Person < ActiveRecord::Base

validates_presence_of :email, message: "Email cannot be blank."

end
