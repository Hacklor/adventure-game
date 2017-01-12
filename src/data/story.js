const questions = [
  {
    id: 1,
    title: "Question 1",
    description: "Description of question 1",
    answers: {
      type: "choose",
      choices: [
        {
          id: 1,
          title: "Question 1: Answer 1"
        },
        {
          id: 2,
          title: "Question 1: Answer 2"
        },
        {
          id: 3,
          title: "Question 1: Answer 3"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Question 2",
    description: "Description of question 2",
    answers: {
      type: "choose",
      choices: [
        {
          id: 1,
          title: "Question 2: Answer 1"
        },
        {
          id: 2,
          title: "Question 2: Answer 2"
        },
        {
          id: 3,
          title: "Question 2: Answer 3"
        }
      ]
    }
  },
  {
    id: 3,
    title: "Question 3",
    description: "Description of question 3",
    answers: {
      type: "choose",
      choices: [
        {
          id: 1,
          title: "Question 3: Answer 1"
        },
        {
          id: 2,
          title: "Question 3: Answer 2"
        },
        {
          id: 3,
          title: "Question 3: Answer 3"
        }
      ]
    }
  }
];

class Story {
  constructor(questions) {
    this.questions = questions;
  }

  start() {
    return questions[0];
  }

  next(questionId, answerId) {
    const currentIndex = this.questions.findIndex(q => q.id === questionId);
    return questions[currentIndex + 1];
  }
}

const story = new Story(questions);

export default story;
