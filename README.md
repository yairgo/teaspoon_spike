This app is an example app for an [issue with sprockets](https://github.com/rails/sprockets/issues/183).

## Setup Instructions

- ```rails new teaspoon_spike -O -S -T --skip-turbolinks --skip-spring```
- Remove `coffee-rails` from Gemfile. bundle install
- Add welcome controller and view
- Enable sprockets in config/application.rb
- Add teaspoon and wekbit
- install teaspoon ```rails generate teaspoon:install --no-coffee```


## Instructions

- Start your server and navigate to localhost:3000/teaspoon