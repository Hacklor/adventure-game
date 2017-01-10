const story = [
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
  }
];

export default story;
