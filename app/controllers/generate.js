/* Generate Info Controller */

app.controller('generateCtrl', generateCtrl, ['$scope'], 'basics');


function generateCtrl( $scope, $http, basics ) {
    $scope.showingResume = true;
   
       
       
       $scope.generate_pdf = function() {
           $scope.lightbox = true;
           $scope.instructions = true;
           $scope.instructionsText = true;
       }
       $scope.closeInstructions = function() {
           $scope.lightbox = false;
           $scope.instructions = false;
           $scope.instructionsText = false;
       }
       
       // Actual Printing
        $scope.printResume = function(){
            $scope.showingResume = true;
            $scope.showingCoverLetter = true;
            $(document).prop('title', "Your Resume");
            print();
        }
       
       /* data1 = "<html><head></head><body>"+$('.showpreview').html()+'</body></html>';
        $http({
          method: 'POST',
          url: 'https://resume-shahpranaf.c9users.io/php/getPdf.php',
          params: {p:data1}
          }).then(function successCallback(response) {
            alert('yes');
            console.log(response);
          }, function errorCallback(response) {
            console.log(response);
          });
          *$http.post('https://resume-shahpranaf.c9users.io/php/getPdf.php','', {responseType:'arraybuffer'})
            .success(function (response) {
               var file = new Blob([response], {type: 'application/pdf'});
               var fileURL = URL.createObjectURL(file);
               
               $scope.pdfLink = $sce.trustAsResourceUrl(fileURL);console.log($scope.pdfLink);
            });*/
            
       /* var htmlString = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head>"+
        " <style>.showpreview{ border: 1px solid #000; width: 100%; max-width: 800px; margin: 20px auto; padding: 20px 30px;} .pdf-basic .name, .pdf-basic .id{ font-size: 20px;} .pdf-basic{ margin-bottom: 30px; border-bottom: 3px solid green; padding-bottom: 20px;} .showpreview .title { text-align: center; font-weight: bold; font-size: 18px;}.pdf-skills li { display: inline-block; margin-right: 10px; border: 1px dotted; padding: 5px;} .pdf-content{ margin: 10px 0; text-align: justify;}.pdf-content ul li { margin: 20px 0; width: 100%;}.showpreview .topic-title { display: inline-block; margin: 0 10px 10px 0;}.showpreview .topic-title-2 { display: inline-block; font-size: 24px; margin-right: 10px;}.showpreview .qualify-institute { font-size: 18px;} </style>"+
        "</head>"+ "<body>" + data +"</body></html>";
        
        var byteNumbers = new Uint8Array(htmlString.length);

        for (var i = 0; i < htmlString.length; i++) {
            byteNumbers[i] = htmlString.charCodeAt(i);
        }
        
        var blob = new Blob([byteNumbers], {type: 'text/html'});
        var url = URL.createObjectURL(blob);

        var a = document.createElement('a');
        a.download = "export.docx";
        a.href = url;
        a.click();*/
   
}
