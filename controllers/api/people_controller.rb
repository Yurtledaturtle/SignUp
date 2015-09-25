class PeopleController < ApiController

  get '/' do
    content_type :json
    Person.all.to_json
  end

  post '/' do
    content_type :json
    person = Person.create( params[:person] )
    redirect '/'
  end

  delete '/:id' do
    content_type :json
    Person.destroy(params[:id])
    halt 202
  end

end
