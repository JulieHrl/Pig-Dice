$( document ).ready(function() {    //Initialise le code JQuery
    let dice1, dice2, roundScore1, roundScore2, curScore1, curScore2, player1;

    $("#newGame").click(function(){ //Initialise une nouvelle partie
        roundScore1 = 0;
        roundScore2 = 0;            //On définit les valeurs de départ des variables
        curScore1 = 0;
        curScore2 = 0;
        player1 = true;

        $("#total-0").html(roundScore1); //On affiche les valeurs de départ
        $("#current-score-0").html(curScore1);
        $("#total-1").html(roundScore2);
        $("#current-score-1").html(curScore2);
        $("#who").html("Player 1"); //C'est le joueur 1 qui commence
        $("#player-0").css("background-color","rgb(191,61,72"); //On change la couleur de son div pour le mettre en évidence
        $("#player-1").css("background-color","indianred"); //Celle du joueur 2 a sa couleur par défaut

    })

    function roll() { //Fonction qui va afficher les images des dés en fonction des valeurs
        let src1;
        let src2;
        src1 = dice1 == 1 ? "img/dice-1.png"
            : dice1 == 2 ? "img/dice-2.png"
            : dice1 == 3 ? "img/dice-3.png"
            : dice1 == 4 ? "img/dice-4.png"
            : dice1 == 5 ? "img/dice-5.png"
            : "img/dice-6.png"
        $("#dice1").attr('src', src1); //La méthode attr('nom', valeur) permet d'attribuer une valeur à un élément: ici une image
        src2 = dice2 == 1 ? "img/dice-1.png"
            : dice2 == 2 ? "img/dice-2.png"
            : dice2 == 3 ? "img/dice-3.png"
            : dice2 == 4 ? "img/dice-4.png"
            : dice2 == 5 ? "img/dice-5.png"
            : "img/dice-6.png"
        $("#dice2").attr('src', src2);
    }

    $("#roll").click(function(){ //Fonction pour lancer les dés: 2 tirages aléatoires qui appellent la fonction d'affichage des images en fonction des vaaleurs
        dice1 = Math.floor(Math.random()*6+1);
        dice2 = Math.floor(Math.random()*6+1);
        roll();
        if (player1 == true) { //Tour du joueur 1
            if (dice1 == 1 && dice2 == 1) { //Si les 2 dés affichent 1
                curScore1 = 0; //On reset le score actuel
                $("#current-score-0").html(curScore1); //On l'affiche
                player1 = false; //C'est le tour du joueur 2
                $("#player-0").css("background-color","indianred"); //Donc on inverse les couleurs pour mettre le joueur 2 en évidence
                $("#player-1").css("background-color","rgb(191,61,72");
                $("#who").html("Player 2")
            }
            else { //Sinon
                curScore1 += dice1 + dice2; //On ajoute la valeur de chaque dé au score actuel
                $("#current-score-0").html(curScore1); //On l'affiche
            }
        }
        else { //Tour du joueur 2
            if (dice1 == 1 && dice2 == 1) {
                curScore2 = 0;
                $("#current-score-1").html(curScore2);
                player1 = true;
                $("#player-0").css("background-color","rgb(191,61,72");
                $("#player-1").css("background-color","indianred");
                $("#who").html("Player 1");
            }
            else {
                curScore2 += dice1 + dice2;
                $("#current-score-1").html(curScore2);
            }
        }
    })

    $("#hold").click(function(){ //Lorsque l'on clique sur hold
        if (player1 == true) {
            roundScore1 += curScore1; //On ajoute le score actuel au score total du joueur
            curScore1 = 0; //On reset le score actuel
            $("#total-0").html(roundScore1); //On affiche tout ça
            $("#current-score-0").html(curScore1);
            player1 = false; //Et c'est au tour de l'autre joueur
            $("#player-0").css("background-color","indianred"); //Donc on inverse les couleurs
            $("#player-1").css("background-color","rgb(191,61,72");
            if (roundScore1 > 99) { //Si le joueur atteint un score total de 100
                $("#total-0").html(roundScore1); //On l'affiche
                alert("Le joueur 1 a gagné!"); //On affiche que le joueur a gagné
                $("#player-0").css("background-color","indianred"); //On reset les couleurs des deux joueurs
                $("#player-1").css("background-color","indianred");
            }
            else {
                $("#who").html("Player 2"); //Sinon, c'est à l'autre joueur de jouer
            }
        }
        else {
            roundScore2 += curScore2;
            curScore2 = 0;
            $("#total-1").html(roundScore2);
            $("#current-score-1").html(curScore2);
            player1 = true;
            $("#player-0").css("background-color","rgb(191,61,72");
            $("#player-1").css("background-color","indianred");
            if (roundScore2 > 99) {
                $("#total-1").html(roundScore2);
                alert("Le joueur 2 a gagné!");
                $("#player-0").css("background-color","indianred");
                $("#player-1").css("background-color","indianred");
            }
            else {
                $("#who").html("Player 1")
            }
        }
    })

})