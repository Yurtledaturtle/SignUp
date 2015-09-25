require 'bundler'
Bundler.require()

# Models
require './models/person'

# Controllers
require './controllers/app_controller'
require './controllers/welcome_controller'
require './controllers/api/api_controller'
require './controllers/api/people_controller'

# Maps
map('/'){ run WelcomeController }
map('/api/people'){ run PeopleController }
