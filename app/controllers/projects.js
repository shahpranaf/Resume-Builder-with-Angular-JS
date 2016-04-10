/* project Info Controller */

app.controller('projectsCtrl', projectsCtrl, ['$scope', 'projects']);

function projectsCtrl( $scope, projects, $timeout ){
    $scope.projects = projects.projects;
    
    
    $scope.saveProject = function(){
        
        if( !$scope.projectTitle || !$scope.projectRole ){
            $('#save_project').addClass('btn-danger').text("Missing required fields");
            $('.required').each( function(){
               if( $(this).val() == '' ){
                   $(this).focus().parent('.form-group').addClass('has-error');
                   return false;
               } 
            });
            
            resetSaveProject( $timeout );
            return;
        }
        
        $scope.projects.push( { projectTitle : $scope.projectTitle, projectDescription: $scope.projectDescription, 
                            projectRole: $scope.projectRole, projectUrl: $scope.projectUrl
        });
        
        $storage.localProjects = $scope.projects;
        
        $('#save_project').addClass('btn-success').text("Saved Successfully to List");
        
        resetSaveProject( $timeout );
        
        /* REset Form */
         $scope.projectTitle =$scope.projectUrl = $scope.projectRole = $scope.projectDescription = '';
          
    }
    
    $scope.deleteProject = function($index){
        $scope.projects.splice($index, 1)
    }
    
    $scope.editProject = function($index){
        $scope.projectTitle = $scope.projects[$index].projectTitle;
        $scope.projectUrl = $scope.projects[$index].projectUrl;
        $scope.projectRole = $scope.projects[$index].projectRole;
        $scope.projectDescription = $scope.projects[$index].projectDescription;
        $scope.projects.splice($index,1);
    }
}

function resetSaveProject( $timeout ){
    $timeout( function(){
                $('#save_project').removeClass('btn-danger').removeClass('btn-success').text("Save To Project List");
    }, 2000 );
}