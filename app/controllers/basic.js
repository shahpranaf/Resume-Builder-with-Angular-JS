/* Basic Info Controller */

app.controller('basicCtrl', basicCtrl, ['$scope', 'basics']);


function basicCtrl( $scope, basics ){
    
    $scope.basics = basics;console.log(basics)
    
    $scope.isMakingChanges = false;
    
    $scope.makingChanges = function(){console.log("HI");
        if( $scope.isMakingChanges ){
            $('#save_basic').html('Save Changes');
            $('#save_basic').removeClass('btn-success');
        }
        else{
            return;
        }
    }
    
    
    $scope.basicInit = function(){
        if( basics.name ){
            $('#save_basic').html('Saved');
            $('#save_basic').addClass('btn-success');
            $scope.isMakingChanges = true;
        }
    }
    
    $scope.saveBasic = function(){
            $('#save_basic').html('Saved');
            $('#save_basic').addClass('btn-success');
            $scope.isMakingChanges = true;
            $storage.localBasics = $scope.basics;
    }
}
