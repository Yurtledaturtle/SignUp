# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Your Portfolio

It is the final 3 weeks of the 'in-class' portion of WDI, i.e. the independence section!

During this section, you are to deliver a portfolio site complete with your class projects and the below listed applications. Each should be their own GitHub repository.

---

Required applications:
- Rails
- Sinatra
- MEAN
- Your PERSONAL portfolio website

These required apps are to be complete with EITHER the below listed app OR with your final project. This is to say that...
  - If your final project is a MEAN app...you also need to build the below listed Rails & Sinatra applications.
  - If your final project is a Rails application...you also need to build the below listed MEAN & Sinatra applications.
  - If your final project is a Sinatra application...you also need to build the below listed MEAN & Rails applications.

---

### Rails App
- C.R.U.D. API
- Backbone application consuming the API
- Example:
  - Blog

---

### Sinatra App
- A "Sign-Up" application
- Use Backbone application consuming the API
- As a user, I can enter in my name, email, etc. so I can 'sign-up' to be contacted later.

```text
Hey Dev!

As a musician, I want to have my laptop on my merch table...and future fans can walk up and sign-up! Make sense? They walk up...enter their name...email, etc!  

Here's the catch... I don't want them to be able to 'sign-up' unless the email address has `something@something.something`. Know what I mean?  Until those are all there...I want something RED (or something) telling the user they aren't done.  Once they have entered a real email...I want something GREEN (or something) telling the user they are ready to hit enter. My dev friend called this "Client-Side validation"?  

Thanks!
Mick
```

---

### MEAN App
- We will use the MEAN (**M**ongo/**E**xpress/**A**ngular/**N**ode) stack to build an API!
- We're going to build a RESTful API.
- We will be building several in class, but you must build your OWN from scratch

---

### Independence Application!
- In this project (Rails, Sinatra or MEAN), you will build your own `service` and `client` applications.

  1. Build a `Service`
  - Build a `Client` application that consumes the `Service`
  - Document, polish, present as portfolio piece

#### Service:
- A `Service`, in this project, will be an assortment of JSON endpoints which provide data and/or compute something given input data
  - Examples:
    - Data API:
      - Find large dataset without an existing API
        - Search for interesting CSV files for example
      - Process the data and provide API
        - For example...
          - ... how many flights were delayed due to the snow on Thanksgiving 2014? (and other flight-related questions)
          - ... what is the average yearly precipitation in Zimbabwe? (and other weather- or Zimbabwe-related questions)
    - Service API:
      - Given some input data, provide processed response
        - For example...
          - ... a markov model for processing text (i.e. SkakeItSpeare)

#### Client:
- A `Client`, in this project, will be a JS-heavy browser-based application with focus on the user experience that interacts with a service via AJAX.
