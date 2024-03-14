var objPeople = [
	{
		username : "turtlecode",
		password : "codechannel"
	},
	{
		username : "bethannya",
		password : "dutra"
	},
	{
		username : "princess",
		password : "mary"
	},
	{
		username : "mario",
		password : "bross"
	},
	{
		username : "pradeep",
		password : "pakalapati"
	}
]
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	
	for (var i = 0 ; i< objPeople.length; i++) {
		if (username == objPeople[i].username && password == objPeople[i].password)
			console.log(username + "You're logged in!");
		return
	}
	console.log('Incorrect Username or Password, Please try again')
}