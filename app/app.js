var app = angular.module("resumeBuilder", ['ngRoute', 'ngStorage']);
    
app.config( function($routeProvider) {
    $routeProvider
    
    .when( '/', {
        templateUrl: 'view/home.html',
        controller: 'mainCtrl'
    })
    
    .when( '/basic', {
        templateUrl: 'view/basic.html',
        controller: 'basicCtrl'
    })
    
    .when( '/summary', {
        templateUrl: 'view/summary.html',
        controller: 'summaryCtrl'
    })
    
    .when( '/experience', {
        templateUrl: 'view/experience.html',
        controller: 'experienceCtrl'
    })
    
    .when( '/projects', {
        templateUrl: 'view/projects.html',
        controller: 'projectsCtrl'
    })
    
    .when( '/qualifications', {
        templateUrl: 'view/qualifications.html',
        controller: 'qualificationsCtrl'
    })
    
    .when( '/skills', {
        templateUrl: 'view/skills.html',
        controller: 'skillsCtrl'
    })
    
    .when( '/generate', {
        templateUrl: 'view/generate.html',
        controller: 'generateCtrl'
    })
    
    
    
} );

