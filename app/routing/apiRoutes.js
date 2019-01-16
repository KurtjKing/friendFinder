

var friends = require("../data/friends");

module.exports = function(app){

app.get("/api/friends", function(req,res){
    res.json(friends);
});



app.post('/api/friends', function(req, res) {
    
    var userData = req.body;
   

    var userResponses = userData.scores;
    // console.log('userResponses = ' + userResponses);

    // use for matches 
    var matchName = "";
    var matchImage = "";
    var totalDifference = 5000; 

    // loop through current list of friends 
    for (var i = 0; i < friends.length; i++) {
       

        // calculate the differnces 
        var gap = 0;
        for (var j = 0; j < userResponses.length; j++) {
            gap += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        console.log('gap = ' + gap);

        
        if (gap < totalDifference) {
            console.log('Closest match found = ' + gap);
            console.log('Name Image = ' + friends[i].name);
            console.log('Friend image = ' + friends[i].photo);

            totalDifference = gap;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
        }
    }

     

    // push new user into the array 
    friends.push(userData);

    var matchArray=[];

     matchArray.push({status: "GOOD", matchName: matchName, matchImage: matchImage});
    
    res.json(matchArray[0]);
});

};



