/* Experience Info Controller */

app.controller('experienceCtrl', experienceCtrl, ['$scope', 'jobs']);

function experienceCtrl( $scope, jobs, $timeout ){
    $scope.jobs = jobs.jobs;
    
    
    $scope.saveExperience = function(){
        
        if( !$scope.jobEmployerTitle || !$scope.jobEmployerRole ){
            $('#save_experience').addClass('btn-danger').text("Missing required fields");
            $('.required').each( function(){
               if( $(this).val() == '' ){
                   $(this).focus().parent('.form-group').addClass('has-error');
                   return false;
               } 
            });
            
            resetSaveExperience( $timeout );
            return;
        }
        
        $scope.jobs.push( { jobEmployer : $scope.jobEmployerTitle, jobLocation: $scope.jobEmployerLocation, 
                            jobRole: $scope.jobEmployerRole, jobDuration: $scope.jobEmployerDuration,
                            jobDescription: $scope.jobEmployerDescription
        });
        
        $storage.localJobs = $scope.jobs;
        
        $('#save_experience').addClass('btn-success').text("Saved Successfully to List");
        
        resetSaveExperience( $timeout );
        
        /* REset Form */
         $scope.jobEmployerTitle = $scope.jobEmployerLocation = $scope.jobEmployerRole = $scope.jobEmployerDuration = $scope.jobEmployerDescription = '';
          
    }
    
    $scope.deleteEmployer = function($index){
        $scope.jobs.splice($index, 1)
    }
    
    $scope.editEmployer = function($index){
        $scope.jobEmployerTitle = $scope.jobs[$index].jobEmployer;
        $scope.jobEmployerLocation = $scope.jobs[$index].jobLocation;
        $scope.jobEmployerRole = $scope.jobs[$index].jobRole;
        $scope.jobEmployerDuration = $scope.jobs[$index].jobEmployerDuration;
        $scope.jobEmployerDescription = $scope.jobs[$index].jobEmployerDescription;
        $scope.jobs.splice($index,1);
    }
}

function resetSaveExperience( $timeout ){
    $timeout( function(){
                $('#save_experience').removeClass('btn-danger').removeClass('btn-success').text("Save To Experience List");
    }, 2000 );
}