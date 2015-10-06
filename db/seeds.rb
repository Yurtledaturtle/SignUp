require './models/person'

30.times do

  Customer.create({
    name: Faker::Name.name,
    email: Faker::Internet.email
  })
end
