app.value('prompts', 
                {
                    answeredLocal: false
                });
app.value('basics', {});
app.value('summary', {});
app.factory('jobs', function(){
    var o = {};
    
    o.jobs = [];
    
    return o;
} );
app.factory('projects', function(){
    var o = {};
    
    o.projects = [];
    
    return o;
} );
app.factory('qualifications', function(){
    var o = {};
    
    o.qualifications = [];
    
    return o;
} );
app.factory('skills', function(){
    var o = {};
    
    o.skills = [];
    
    return o;
} );