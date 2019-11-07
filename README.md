# Deployment Instructions

First Steps

1. npm i
* If any problem in here remove package-lock.json and run again `npm i`

## Cloud Deployment

1. `export AWS_PROFILE=yourAWSProfileName`

* This can be checked under .aws directory (it is normally located in your HOME)

2. `npm run deploy:dev`

## Offline deployment

1. `npm run deploy:offline`