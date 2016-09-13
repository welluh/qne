# qne API v1

## Overview

The qne service uses a RESTful JSON API for all communication. This publicly available endpoint is located at [origin]/api.

NOTE: [origin] in the following addresses needs to be replaced by the qne server address, for example in development use http://localhost:3000

## Security

There are four types of endpoint security in the API:

1. email/password authentication
2. JWT token authentication
3. random number authentication
4. no authentication

### 1. Email/password authentication

This method is used for in security related endpoints, such as [origin]/api/v1/authenticate. Authentication is provided using [HTTP Basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

### 2. JWT token authenticaton

Token authentication is the most common authentication method that is built using [JSON Web Tokens](https://jwt.io). The token is obtained from the [origin]/api/v1/authenticate POST endpoint and passed to the methods using token authentication in the HTTP Header `Authorization: Bearer <token>`.

### 3. Random number authenticaton

Random number authentication is used in individualized questionnaire endpoints, and is passed in the url or in the payload. For example some questionnaire URL:s might need additional security, and some respondent links might be unique, which would result in an endpoint [origin]/api/v1/questions/[questionnaire path]/questionnaire/[questionnaire_random_number]/respondent/[respondent_random_number]

### 4. No authentication

qne also hosts a public methods, which use no authentication. These are e.g. methods that receive publicly available questionnaires, such as GET [origin]/api/v1/questions/[questionnaire_path].

## Security endpoints

### Authenticate

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/authenticate |
| Method         | POST |
| Security       | 1    |
| Description    | Authenticates the user and returns a JWT token.|


## Administration endpoints

### Create New Questionnaire

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questionnaires |
| Method         | PUT |
| Security       | 2   |
| Description    | Creates a new questionnaire, payload is the full questionnaire.|

### Update Questionnaire

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questionnaires/[questionnaire_uuid] |
| Method         | PUT |
| Security       | 2   |
| Description    | Updates an existing questionnaire, payload has the full questionnaire.|

### Delete Questionnaire

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questionnaires/[questionnaire_uuid] |
| Method         | DELETE |
| Security       | 2      |
| Description    | Deletes an existing questionnaire, which is not deployed.|

### Get Single Questionnaire

| Endpoint       | /api/v1/questionnaires/[questionnaire_uuid] |
| Method         | GET |
| Security       | 2   |
| Description    | Gets an existing questionnaire.|

### Get All Questionnaires

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questionnaires |
| Method         | GET |
| Security       | 2   |
| Description    | Gets all questionnaires.|

### Deploy Questionnaire

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questionnaires/[questionnaire_uuid]/deploy |
| Method         | POST |
| Security       | 2    |
| Description    | Deploys a questionnaire. Running this makes the questionnaire available at the questions endpoints.|

### Close Questionnaire

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questionnaires/[questionnaire_uuid]/close |
| Method         | POST |
| Security       | 2    |
| Description    | Closes a live questionnaire. Running this makes the questions endpoints stop working.|

### Get results of a questionnaire

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questionnaires/[questionnaire_uuid]/results |
| Method         | GET  |
| Security       | 2    |
| Description    | Gets all results to a questionnaire.|

## Respondent endpoints

### Get public questionnaire questions

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questions/[path] |
| Method         | GET |
| Security Level | 4   |
| Description    | Gets questions for a public questionnaire.|

### Get protected questionnaire questions

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questions/[path]/questionnaire/[questionnaire_random_number] |
| Method         | GET |
| Security Level | 3   |
| Description    | Gets questions for a protected questionnaire.|

### Get individualized public questionnaire questions

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questions/[path]/respondent/[respondent_random_number] |
| Method         | GET |
| Security Level | 3   |
| Description    | Gets questions for a public questionnaire, but individualized to for a single respondent.|

### Get individualized protected questionnaire questions

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questions/[path]/user/questionnaire/[questionnaire_random_number]/respondent/[respondent_random_number] |
| Method         | GET |
| Security Level | 3   |
| Description    | Gets questions for a public questionnaire, but individualized to for a single respondent.|

### Answer to a questionnaire

| Description    |  Value|
| ------------- | :-----|
| Endpoint       | /api/v1/questions/[path]/answer |
| Method         | POST   |
| Security Level | 3 or 4 |
| Description    | Send answers to questionnaire in the payload, optionally including a questionnaire and respondent random numbers.|
