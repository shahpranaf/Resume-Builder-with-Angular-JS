/* Summary Info Controller */

app.controller('summaryCtrl', summaryCtrl, ['$scope', 'summary']);


function summaryCtrl( $scope, summary ){
    
    $scope.summary = summary;
    
    $scope.isMakingChanges = false;
    
    $scope.makingChanges = function(){
        if( $scope.isMakingChanges ){
            $('#save_summary').html('Save Summary');
            $('#save_summary').removeClass('btn-success');
        }
        else{
            return;
        }
    }
    
    
    $scope.summaryInit = function(){
        if( summary.body ){
            $('#save_summary').html('Saved');
            $('#save_summary').addClass('btn-success');
            $scope.isMakingChanges = true;
        }
    }
    
    $scope.saveSummary = function(){
            $('#save_summary').html('Saved');
            $('#save_summary').addClass('btn-success');
            $scope.isMakingChanges = true;
            $storage.localSummary = $scope.summary;
    }
}
