/* Skill Info Controller */

app.controller('skillsCtrl', skillsCtrl, ['$scope', 'skills']);

function skillsCtrl( $scope, skills, $timeout ){
    $scope.skills = skills.skills;
    
    
    $scope.saveSkills = function(){
        
        if( !$scope.skill ){
            $('#save_skill').addClass('btn-danger').text("Missing required fields");
            $('.required').each( function(){
               if( $(this).val() == '' ){
                   $(this).focus().parent('.form-group').addClass('has-error');
                   return false;
               } 
            });
            
            resetSaveSkill( $timeout );
            return;
        }
        
        $scope.skills.push( { skill : $scope.skill });
        
        $storage.localSkills = $scope.skills;
        
        $('#save_skill').addClass('btn-success').text("Saved Successfully to List");
        
        resetSaveSkill( $timeout );
        
        /* REset Form */
         $scope.skill = '';
          
    }
    
    $scope.deleteSkill = function($index){
        $scope.skills.splice($index, 1)
    }
    
    $scope.editSkill = function($index){
        $scope.skill = $scope.skills[$index].skill;
        $scope.skills.splice($index,1);
    }
}

function resetSaveSkill( $timeout ){
    $timeout( function(){
                $('#save_skill').removeClass('btn-danger').removeClass('btn-success').text("Save To Skill List");
    }, 2000 );
}