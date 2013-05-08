#pragma strict

//arrays
var back : Texture[];
var cards : Texture[];
var deck : Texture[] = new Texture[112];
var opHand : Texture[] = new Texture[7];

//player vars
var go : boolean = false;
var miles : int = 0;
var battleDeck : Texture = back[0];
var lastMileCard : Texture = back[0];
var speedlimit : Texture = back[0];
var speedlimitOn : boolean = false;
var rightOfWay : boolean = false;
var punctureProof : boolean = false;
var drivingAce : boolean = false;
var extraGas : boolean = false;

//opponent vars
var opGo : boolean = false;
var opMiles : int = 0;
var opBattleDeck : Texture = back[0];
var opLastMileCard : Texture = back[0];
var opSpeedLimit : Texture = back[0];
var opSpeedLimitOn : boolean = false;
var opRightOfWay : boolean = false;
var opPunctureProof : boolean = false;
var opDrivingAce : boolean = false;
var opExtraGas : boolean = false;


function Start () {
//will run turns through loop system. If player && opponent < 1000 Miles player turn then opponent
//if player = 1000 miles player wins
//if opponent = 1000 miles player loses
}

//sees if player meets move conditions
function canGO (){

}

//sees if opponent meets move conditions
function opCanGo (){


}

function OnGUI () {

	GUI.BeginGroup(Rect(0,0,Screen.width,Screen.height));


	GUI.Label (Rect (560, 195, 200, 20), "Opponents Total Miles: " + opMiles);
	GUI.Label (Rect (560, 215, 200, 20), "Your Total Miles: " + miles);
	
//opponents battle piles
	if(GUI.Button(new Rect(150,121,90,120), opSpeedLimit))
		{
	
		}
	if(GUI.Button(new Rect(300,121,90,120), opBattlePile))
		{
	
		}
	if(GUI.Button(new Rect(450,121,90,120), opLastMileCard))
		{
	
		}

//opponents hand not displayed prints card back texture
//actual opponents hand will be held in opHand array.
	GUI.Box(new Rect(0,0,90,120), back[0]);
	GUI.Box(new Rect(100,0,90,120), back[0]);
	GUI.Box(new Rect(200,0,90,120), back[0]);
	GUI.Box(new Rect(300,0,90,120), back[0]);
	GUI.Box(new Rect(400,0,90,120), back[0]);
	GUI.Box(new Rect(500,0,90,120), back[0]);
	
//opponent draw card
	GUI.Box(new Rect(600,0,90,120), back[0]);

//button used to draw from deck
	if(GUI.Button(new Rect(50,181.5,90,120),"Deck"))
		{
	
		}

//player battle piles
	if(GUI.Button(new Rect(150,242,90,120),"Speed Limit"))
		{
	
		}
	if(GUI.Button(new Rect(300,242,90,120),"Battle Pile"))
		{
	
		}
	if(GUI.Button(new Rect(450,242,90,120),"Miles Traveled"))
		{
	
		}

//player hand + one for new draw
	if(GUI.Button(new Rect(0,363,90,120),"Speed Limit"))
		{
	
		}
	if(GUI.Button(new Rect(100,363,90,120),"Battle Pile"))
		{
	
		}
	if(GUI.Button(new Rect(200,363,90,120),"Miles Traveled"))
		{
	
		}
	if(GUI.Button(new Rect(300,363,90,120),"Speed Limit"))
		{
	
		}
	if(GUI.Button(new Rect(400,363,90,120),"Battle Pile"))
		{
	
		}
	if(GUI.Button(new Rect(500,363,90,120),"Miles Traveled"))
		{
	
		}
		
//currently drawn card
	if(GUI.Button(new Rect(600,363,90,120),"Miles Traveled"))
		{
	
		}

}