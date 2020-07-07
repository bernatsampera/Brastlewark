# Brastlewark

This Brastlewark web page provides live information on Brastlewark citizens making use of the libraries @angular/material, to skin the views and components of the page, and @rx-angular/state, to provide a set of reactive tools to handle the component state when dealing with multiple sources of data.

A live demo can be found in https://bernatsampera.github.io/Brastlewark/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Structure of the application

### Components

#### DashboardComponent 

This is the main component of the application, it containts the logic to filter and sort the citizens, handles all the data coming from the paginator and select the citizens.

Extends the RxState Class to mainly handle the data from the paginator.

#### CitizenListComponent
It receives an Observable with the citizens that should be displayed in the current page and provides this functionality.

#### CitizenDetailComponent 
Displays one Citizen and it's details. Provides link to visit directly the friends of the displayed citizen.

#### FilterCitizenComponent
Outputs a observable that emits a value of the type "FilterState" with the corresponding values modified by the user

#### SortCitizenComponent
Uses the type "Sort" from the Angular Material library to emit an Observable with the necessary information to order the citizens.

#### PaginatorComponent
Provides visual interface for the paginator and handles the related operations.

### Services

#### CityService (Includes tests)
Provides citiesData$, which returns the response from the external url 

#### CitizenService (Includes tests)
Provides citizens$, to transform the data from CityService to an Obserable<Citizen[]>.
Also provides selectedCitizen$, to retrieve the citizen selected based on the id. 

#### DashboardService
Just provides a BehaviourSubject to keep the value of the selected page when routing to the detail of a citizen.

