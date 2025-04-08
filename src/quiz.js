class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion(){
        this.currentQuestionIndex++;
    }

    shuffleQuestions(){
        for (let i = this.questions.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() *(i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
           }
    }

    checkAnswer(answer){
        if(answer === this.questions[this.currentQuestionIndex].answer){
            this.correctAnswers++;
        }
    }

    hasEnded(){
        /*if(this.currentQuestionIndex < this.questions.length){
            return false;
        }
        return true;*/

        return this.currentQuestionIndex === this.questions.length;
    }

    filterQuestionsByDifficulty(difficulty){
        if (difficulty === 1|| difficulty === 2 || difficulty === 3) {
            this.questions = this.questions.filter(selectedLevel => selectedLevel.difficulty === difficulty);
        }
        
    }

    averageDifficulty(){
        const totalValue = this.questions.reduce((accumulator, question) => accumulator + question.difficulty, 0);
        /*
        const totalValue = this.questions.reduce((accumulator, question) => {
                return accumulator + question.difficulty;
            }, 0);
      */  
        return totalValue / this.questions.length;
    };
};
