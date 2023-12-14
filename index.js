const choices = ["rock", "paper", "scissors"];
        
        document.querySelectorAll('.choice').forEach(choice => {
            choice.addEventListener('click', () => playGame(choice.id));
        });

        function computerChoice() {
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function playGame(playerChoice) {
            const computer = computerChoice();
            const result = getResult(playerChoice, computer);

            document.getElementById("result").innerHTML = `You chose ${playerChoice}, the computer chose ${computer}. ${result}`;
        }

        function getResult(player, computer) {
            if (player === computer) {
                return "It's a draw!";
            } else if (
                (player === "rock" && computer === "scissors") ||
                (player === "paper" && computer === "rock") ||
                (player === "scissors" && computer === "paper")
            ) {
                return "You win!";
            } else {
                return "Computer wins!";
            }
        }