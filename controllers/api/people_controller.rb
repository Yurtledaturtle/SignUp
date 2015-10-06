class PeopleController < ApiController

  get '/' do
    content_type :json
    Person.all.to_json
  end

  post '/' do
    content_type :json
    @json_params = JSON.parse(request.body.read)
    person = Person.create!( @json_params['person'] )
  end

  delete '/:id' do
    content_type :json
    Person.destroy(params[:id])
    halt 202
  end

end
