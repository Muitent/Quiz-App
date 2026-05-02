const startScreen =  document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
console.log(startBtn)
// Quiz Screens
const quizScreen = document.getElementById("quiz-screen");
const quizQuestion = document.getElementById("quiz-question");
const currentQuestion = document.getElementById("current-question");
const totalQuestion = document.getElementById("total-question");
const score = document.getElementById("question-score");
const questionList = document.getElementById("question-list");
const progress = document.getElementById("progress");

// Result Screen 
const totalScore = document.getElementById("total-score");
const restartBtn = document.getElementById("restart-btn");

const data = [
    {question : "What is the capital of france ?",
        answer: [
        { text:"London" , correct : false},
        {   text:"Berlin" , correct: false},
        {   text:"Paris", correct: true},
        {   text: "Madrid" , correct:false}
    ],
    },
    {
        question : "What is The Capital of Nepal ?",
        answer:[
            {text:"Janakpur"  , correct : false},
            {text:"Biratnagar" ,  correct:false},
            {text:"Lumbini" , correct: false},
            {text:"Kathmandu" , correct:true}
        ]
    },
    {
        question : "What is The Full form of ALU ?"
        , answer : [
            {text:"Automatic Logical Unit" , correct:false},
            {text:"Atom Logo United" , correct:false},
            {text: "Artematic Logics Unit" , correct:false},
            {text: "Artematic Logics Unit" , correct:true}
        ]
    },

   
  {
    "question": "What is The Full form of ALU ?",
    "answer": [
      {
        "text": "Automatic Logical Unit",
        "correct": false
      },
      {
        "text": "Atom Logo United",
        "correct": false
      },
      {
        "text": "Artematic Logics Unit",
        "correct": false
      },
      {
        "text": "Arithmetic Logic Unit",
        "correct": true
      }
    ]
  },
  {
    "question": "What is the full form of CPU?",
    "answer": [
      {
        "text": "Central Processing Unit",
        "correct": true
      },
      {
        "text": "Central Programming Unit",
        "correct": false
      },
      {
        "text": "Computer Personal Unit",
        "correct": false
      },
      {
        "text": "Central Processor Utility",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of RAM?",
    "answer": [
      {
        "text": "Read Access Memory",
        "correct": false
      },
      {
        "text": "Random Access Memory",
        "correct": true
      },
      {
        "text": "Rapid Access Memory",
        "correct": false
      },
      {
        "text": "Raw Access Memory",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of ROM?",
    "answer": [
      {
        "text": "Read Only Memory",
        "correct": true
      },
      {
        "text": "Random Only Memory",
        "correct": false
      },
      {
        "text": "Read Online Memory",
        "correct": false
      },
      {
        "text": "Raw Only Memory",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of URL?",
    "answer": [
      {
        "text": "Universal Resource Link",
        "correct": false
      },
      {
        "text": "Uniform Resource Link",
        "correct": false
      },
      {
        "text": "Uniform Resource Locator",
        "correct": true
      },
      {
        "text": "Universal Resource Locator",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of HTTP?",
    "answer": [
      {
        "text": "HyperText Transfer Protocol",
        "correct": true
      },
      {
        "text": "HyperText Transfer Program",
        "correct": false
      },
      {
        "text": "HyperText Transfer Package",
        "correct": false
      },
      {
        "text": "HyperText Tracking Protocol",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of IP?",
    "answer": [
      {
        "text": "Internet Protocol",
        "correct": true
      },
      {
        "text": "Internal Protocol",
        "correct": false
      },
      {
        "text": "Instant Protocol",
        "correct": false
      },
      {
        "text": "Internet Procedure",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of USB?",
    "answer": [
      {
        "text": "Universal Serial Bus",
        "correct": true
      },
      {
        "text": "Universal Serial Block",
        "correct": false
      },
      {
        "text": "United Serial Bus",
        "correct": false
      },
      {
        "text": "Universal System Bus",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of HTML?",
    "answer": [
      {
        "text": "HyperText Machine Language",
        "correct": false
      },
      {
        "text": "HyperText Markup Link",
        "correct": false
      },
      {
        "text": "HyperText Markup Language",
        "correct": true
      },
      {
        "text": "HyperText Main Language",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of VPN?",
    "answer": [
      {
        "text": "Virtual Private Network",
        "correct": true
      },
      {
        "text": "Virtual Public Network",
        "correct": false
      },
      {
        "text": "Verified Private Network",
        "correct": false
      },
      {
        "text": "Virtual Personal Node",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of PDF?",
    "answer": [
      {
        "text": "Portable Document File",
        "correct": false
      },
      {
        "text": "Portable Document Format",
        "correct": true
      },
      {
        "text": "Printable Document Format",
        "correct": false
      },
      {
        "text": "Portable Data Format",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of LED?",
    "answer": [
      {
        "text": "Light Emitting Diode",
        "correct": true
      },
      {
        "text": "Light Emitting Device",
        "correct": false
      },
      {
        "text": "Light Enhanced Diode",
        "correct": false
      },
      {
        "text": "Light Emitting Display",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of LCD?",
    "answer": [
      {
        "text": "Light Crystal Display",
        "correct": false
      },
      {
        "text": "Liquid Crystal Diode",
        "correct": false
      },
      {
        "text": "Liquid Crystal Display",
        "correct": true
      },
      {
        "text": "Light Crystal Diode",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of GUI?",
    "answer": [
      {
        "text": "Graphical Unit Interface",
        "correct": false
      },
      {
        "text": "Graphical User Interaction",
        "correct": false
      },
      {
        "text": "Graphical User Interface",
        "correct": true
      },
      {
        "text": "General User Interface",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of BIOS?",
    "answer": [
      {
        "text": "Basic Input Output System",
        "correct": true
      },
      {
        "text": "Basic Internal Operating System",
        "correct": false
      },
      {
        "text": "Binary Input Output System",
        "correct": false
      },
      {
        "text": "Basic Input Operating System",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of WWW?",
    "answer": [
      {
        "text": "World Wide Web",
        "correct": true
      },
      {
        "text": "World Wide Wares",
        "correct": false
      },
      {
        "text": "World Wide Wizard",
        "correct": false
      },
      {
        "text": "World Web Wide",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of LAN?",
    "answer": [
      {
        "text": "Local Area Network",
        "correct": true
      },
      {
        "text": "Local Area Node",
        "correct": false
      },
      {
        "text": "Link Area Network",
        "correct": false
      },
      {
        "text": "Local Array Network",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of WAN?",
    "answer": [
      {
        "text": "Wide Area Network",
        "correct": true
      },
      {
        "text": "Wide Array Network",
        "correct": false
      },
      {
        "text": "World Area Network",
        "correct": false
      },
      {
        "text": "Wide Area Node",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of FTP?",
    "answer": [
      {
        "text": "File Transfer Protocol",
        "correct": true
      },
      {
        "text": "File Transfer Program",
        "correct": false
      },
      {
        "text": "File Tracking Protocol",
        "correct": false
      },
      {
        "text": "File Transmission Protocol",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the full form of SSD?",
    "answer": [
      {
        "text": "Solid State Drive",
        "correct": true
      },
      {
        "text": "Solid Storage Drive",
        "correct": false
      },
      {
        "text": "Solid State Device",
        "correct": false
      },
      {
        "text": "Super State Drive",
        "correct": false
      }
    ]
  }
]

const totalQuestions = data.length;
let totalscore = 0 ;
let previousScore  ;
totalQuestion.innerText = totalQuestions;



function startQuiz() {
    console.log("StartBtn Click")
         startScreen.classList.remove("active");
         quizScreen.classList.add("active");

}








startBtn.addEventListener("click" , startQuiz)
