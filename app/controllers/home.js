/* Home Controller */

app.controller('mainCtrl', mainCtrl, ['$scope', '$localStorage', '$sessionStorage', 'prompts', 'basics', 'summary', 'jobs', 'projects', 'qualifications', 'skills']);
app.controller('navCtrl', navCtrl, ['$scope', '$location'])

function mainCtrl( $scope, $localStorage, $sessionStorage, prompts, basics, summary, jobs, projects, qualifications, skills ){
    $storage = $localStorage;
    $scope.basics = basics;
    $scope.summary = summary;
    $scope.jobs = jobs.jobs;
    $scope.projects = projects.projects;
    $scope.qualifications = qualifications.qualifications;
    $scope.skills = skills.skills;
    $scope.welcomeName = '';
    
    
    if( $storage.localBasics && $storage.localBasics.name ){
        $scope.welcomeName = $storage.localBasics.name;
    }
    
    if( !prompts.answeredLocal ){
        if( $storage.summary ){
            $("#has-local-storage").show();
        }
    
    }
    else{
        $("#has-local-storage").hide();
    }
       
    //$scope.loadLocal = function(){
        $("#has-local-storage").slideUp(500);
        /* Basic */
        if($storage.localBasics){
            basics.id           = $storage.localBasics.id;
            basics.name         = $storage.localBasics.name;
            basics.email        = $storage.localBasics.email;
            basics.experience   = $storage.localBasics.experience;
            basics.designation  = $storage.localBasics.designation;
            basics.location     = $storage.localBasics.location;
        }
        
        // Load Summary
        if($storage.localSummary){summary.body = $storage.localSummary.body;}
        if( $storage.localJobs ){
            for( i=0; i< $storage.localJobs.length; i++){
                $scope.jobs.push($storage.localJobs[i]);
            }
        }
        if( $storage.localProjects ){
            for( i=0; i< $storage.localProjects.length; i++){
                $scope.projects.push($storage.localProjects[i]);
            }
        }
        if( $storage.localQualifications ){
            for( i=0; i< $storage.localQualifications.length; i++){
                $scope.qualifications.push($storage.localQualifications[i]);
            }
        }
        if( $storage.localSkills ){
            for( i=0; i< $storage.localSkills.length; i++){
                $scope.skills.push($storage.localSkills[i]);
            }
        }
        prompts.answeredLocal = true;
   // }
    
    $scope.ignoreLocal = function(){
        $("#has-local-storage").slideUp(500).addClass('hidden');
        prompts.answeredLocal = true;
    }
}


/* Controller Function
 * for Navigation
 */
function navCtrl( $scope, $location ){
    $scope.navClass = function(page){
        var currentPage = $location.path().substring(1) || 'home';
        return page === currentPage ? 'active' : '';
    }
}