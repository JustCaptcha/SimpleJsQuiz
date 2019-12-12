export const quizData = {
  "title": "JavaScript Quiz",
  "difficulty": "Easy",
  "questions": [
    {
      "title": 'Which answer is the correct output for console.log("1"-1)',
      "type": "General",
      "reward": 10,
      "answers": [
        {
          "title": "0",
          "isValid": true
        },
        {
          "title": "Empty string",
          "isValid": false
        },
        {
          "title": "None of above",
          "isValid": false
        },
        {
          "title": "-11",
          "isValid": false
        }
      ]
    },
    {
      "title": 'Inside which HTML element do we put the JavaScript?',
      "type": "General",
      "reward": 5,
      "answers": [
        {
          "title": "<scripting>",
          "isValid": false
        },
        {
          "title": "<js>",
          "isValid": false
        },
        {
          "title": "<script>",
          "isValid": true
        },
        {
          "title": "<javascript>",
          "isValid": false
        }
      ]
    },
    {
      "title": 'What is the correct JavaScript syntax to change the content of the HTML element below?',
      "type": "General",
      "reward": 15,
      "answers": [
        {
          "title": "document.getElementById('demo').innerHTML = 'Hello World';",
          "isValid": true
        },
        {
          "title": "#demo.innerHTML = 'Hello World'",
          "isValid": false
        },
        {
          "title": "document.getElementByName('demo').innerHTML = 'Hello World';",
          "isValid": false
        },
        {
          "title": "document.getElement('p').innerHTML = 'Hello World';",
          "isValid": false
        }
      ]
    },
    {
      "title": 'Where is the correct place to insert a JavaScript?',
      "type": "General",
      "reward": 7,
      "answers": [
        {
          "title": "The <head> section",
          "isValid": false
        },
        {
          "title": "The <body> section",
          "isValid": false
        },
        {
          "title": "Both the <head> section and the <body> section are correct",
          "isValid": true
        }
      ]
    },
    {
      "title": 'What is the correct syntax for referring to an external script called "xxx.js"?',
      "type": "General",
      "reward": 10,
      "answers": [
        {
          "title": "<script src='xxx.js'>",
          "isValid": true
        },
        {
          "title": "<script name='xxx.js'>",
          "isValid": false
        },
        {
          "title": "<script href='xxx.js'>",
          "isValid": false
        }
      ]
    }
 ]
};
