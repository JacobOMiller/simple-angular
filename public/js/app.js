"use strict";
//Create our 'MyApp' angular application with the
//'ui.router' as the dependency.
var app = angular.module ('MyApp',['ui.router']);

//Configure the 'MyApp' angular application
app.config([
    //bring dependency objects by name
    '$stateProvider',

    //provide a callback function to use once all
    //the dependencies have been loaded.
    function ($stateProvider){
    // set up and define our page states.
        $stateProvider
            .state('home',{
                url:'/',
                template: '<h2>home</h2>'
            })
            .state('about',{
                    url:'/about',
                    template: '<h2>about</h2>'
            })
            .state('contact',{
                url:'/contact',
                template: '<h2>contact</h2>'
        });
    }
])
