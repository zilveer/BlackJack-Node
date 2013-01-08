
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = {
    currentState : {},
    states : {
        waitingForPlayer : { //realize event handlers of state 'waitingforplayer'
            addPlayer : function(board,requestData){
                return board.addPlayer(requestData["clientID"],requestData["requestedPosition"]);   
            },
            beginState : function(){},
            endState : function(){},
            placeBet : function(){},
            message: "Waiting 10 seconds for other players to join.",
            wait : 3000 //think of it is minwait?
        },             
        acceptingBets:{
            beginState : function(){},
            endState : function(){board.getCards(deck);},
            placeBet : function(data){
                return board.placeBet(data["clientID"],data["betAmt"]);
            },
            addPlayer : function(){},
            conclude : function(){},
            message: "Please place your bets.",
            wait : 3000
        },                    
        checkingForDealerBlackJack:{
            beginState : function(){},
            endState : function(){},
            placeBet : function(){},
            addPlayer : function(){},
            wait : 5000
        },   
        acceptingPlayerOptions:{
            beginState : function(){},
            endState : function(){},
            placeBet : function(){},
            addPlayer : function(){},
            wait : 5000
        },       
        concludingRound:{
            beginState : function(){},
            endState : function(){},
            placeBet : function(){},
            addPlayer : function(){},
            wait : 5000
        }               //Includes Paying Out & Announcing Winner
    },
    setState : function(state){
        this.currentState=this.states[state];
        console.log('State set to ' + state);    //return this.currentState;
    },
    getState : function(){
        return this.currentState;
    },
    getWait : function(){
        return this.currentState.wait;
    },
    getMessage : function(){
        return this.currentState.message;
    },
    callStart : function(){
        this.currentState.beginState();
    },
    callEnd : function(){
        this.currentState.endState();
    }
};






