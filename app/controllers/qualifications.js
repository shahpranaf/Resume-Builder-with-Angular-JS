/* Qualification Info Controller */

app.controller('qualificationsCtrl', qualificationsCtrl, ['$scope', 'qualifications']);

function qualificationsCtrl( $scope, qualifications, $timeout ){
    $scope.qualifications = qualifications.qualifications;
    
    
    $scope.saveQualification = function(){
        
        if( !$scope.qualification || !$scope.qualificationInstitute || !$scope.qualificationLocation || !$scope.qualificationDate ){
            $('#save_qualification').addClass('btn-danger').text("Missing required fields");
            $('.required').each( function(){
               if( $(this).val() == '' ){
                   $(this).focus().parent('.form-group').addClass('has-error');
                   return false;
               } 
            });
            
            resetSaveQualification( $timeout );
            return;
        }
        
        $scope.qualifications.push( { qualification : $scope.qualification, qualificationLocation: $scope.qualificationLocation, 
                            qualificationDate: $scope.qualificationDate, qualificationInstitute: $scope.qualificationInstitute,
                            qualificationGrade: $scope.qualificationGrade
        });
        
        $storage.localQualifications = $scope.qualifications;
        
        $('#save_qualification').addClass('btn-success').text("Saved Successfully to List");
        
        resetSaveQualification( $timeout );
        
        /* REset Form */
         $scope.qualification = $scope.qualificationLocation = $scope.qualificationInstitute = $scope.qualificationDate = $scope.qualificationGrade = '';
          
    }
    
    $scope.deleteQualification = function($index){
        $scope.qualifications.splice($index, 1)
    }
    
    $scope.editQualification = function($index){
        $scope.qualification = $scope.qualifications[$index].qualification;
        $scope.qualificationLocation = $scope.qualifications[$index].qualificationLocation;
        $scope.qualificationInstitute = $scope.qualifications[$index].qualificationInstitute;
        $scope.qualificationDate = $scope.qualifications[$index].qualificationDate;
        $scope.qualificationGrade = $scope.qualifications[$index].qualificationGrade;
        $scope.qualifications.splice($index,1);
    }
}

function resetSaveQualification( $timeout ){
    $timeout( function(){
                $('#save_qualification').removeClass('btn-danger').removeClass('btn-success').text("Save To Qualification List");
    }, 2000 );
}