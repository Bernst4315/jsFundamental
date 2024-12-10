// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // CourseInfo purpose is for data verification related to AssignmenGroup
  // if using one for loop, need to grab all values and insert them at end so there are only two objects in results array
  //Goal: grab the score for first or both assignment(s)
console.log("-------------------------------------------------------------------------------------")
  const result = [];
  let uniqueId = 0;
  let learnerData = {};
  let uniqueIdTracker = 0;
  let assignment = [];

  for (let i = 0; i < submissions.length; i++) {
    //This loops through LearnerSubmissions
    const learnerId = submissions[i].learner_id;
    const assignmentId = submissions[i].assignment_id;
    const score = submissions[i].submission.score;
    let totalPoints = ag.assignments[assignmentId - 1];

    let x = i + 1;
    console.log("Iteration " + x);
    

    if (learnerId !== uniqueId) {

      learnerData = { id: learnerId };
      uniqueId = learnerId;
      uniqueIdTracker++;
      result.push(learnerData);
    } 

    if (assignmentId < 3) {
      if (uniqueIdTracker === 1) {
        
        assignment = result[uniqueIdTracker - 1];
        assignment[assignmentId] = score/totalPoints.points_possible;
        console.log("id 125 " + assignmentId + " " + score);

      } else {
        
        assignment = result[uniqueIdTracker - 1];
        assignment[assignmentId] = score/totalPoints.points_possible; 
        console.log("id 132 " + assignmentId + " " + score);

      }
    } else {
      console.log("Not due yet");
    }
   
    console.log(assignmentId);
    console.log(totalPoints.points_possible);
    console.log(submissions[i]);

  }

  //   result.push({});
  //   result.push({});

  //   let x = result[0];
  //   x[1] = submissions[0].submission.score / ag.assignments[0].points_possible;
  //   x[2] = submissions[1].submission.score / ag.assignments[1].points_possible;
  //   x.avg = (submissions[0].submission.score + submissions[1].submission.score) / (ag.assignments[0].points_possible + ag.assignments[1].points_possible);
  //   x.id = 125; //sub @ idx 0,1,or 2

  //   let y = result[1];
  //   y[1] = submissions[3].submission.score / ag.assignments[0].points_possible;
  //   y[2] = submissions[4].submission.score / ag.assignments[1].points_possible;
  //   y.ave = (submissions[3].submission.score + submissions[4].submission.score) / (ag.assignments[0].points_possible + ag.assignments[1].points_possible);
  //   y.id = 132; //sub @ idx 3, or 4

  // if(result[0].id === 125) console.log(true);

  // let newObj = {};

  // for(let i =0; i < submissions.length; i++){

  //   const assignmentId = submissions[i].assignment_id;
  //   const score = submissions[i].submission.score;
  //   const learnerId = submissions[i].learner_id;
  //   let x = 0;

  //   if(learnerId === result[0].id && assignmentId < 3){

  //      learnerData[assignmentId] = score;
  //      newObj = {...learnerData}
  //     result.push(newObj);
  //     uniqueId = learnerId;
  //     ;

  //   }
  //   // else {
  //   //   continue;
  //   // }

  // }
  //newObj = {...learnerData};

  //console.log(submissions[0].submission.score)

  //result[0].ave = 78;
  // const getAve = {ave: 78};
  // let x = result[0];
  // x.ave = 78;

  console.log(result);

  //return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//console.log(result);
//getLearnerData();

// const result = [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0 // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833 // late: (140 - 15) / 150
//   }
// ];

// let newArr = [];
// let obj = {};

// for(let i = 0; i < 4; i++){
//     let newObj = {};

//     for(let j = 0; j < arr[0].length; j++){

//         let prop = arr[0][j].toLowerCase();
//         let value = arr[i+1][j];
//         obj[prop] = value;
//         newObj= {...obj};

//     }

//     newArr.push(newObj);
// }
