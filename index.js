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
try {
  if(course.id === ag.course_id){
    console.log(true);

  const result = [];
  let uniqueId = 0; 
  let uniqueIdTracker = 0; //used to divid ojs into two groups within same loop
  let assignment = [];
  let sum = 0;
  let totalSum = 0;

  for (let i = 0; i < submissions.length; i++) {
    //This loops through LearnerSubmissions
    const learnerId = submissions[i].learner_id;
    const assignmentId = submissions[i].assignment_id;
    let score = submissions[i].submission.score; //there need to be something that compares due date and submitted date and checks for late subs (extra loop here). maybe make it a function?
    const dateSubmitted = Number(submissions[i].submission.submitted_at.replaceAll("-", ""));
    const dateDue = Number(ag.assignments[assignmentId - 1].due_at.replaceAll("-", ""));
    let isLate = false;
    let notDue = false; 
   //ture date into arry or str. compare month first then day
    
    const totalPoints = ag.assignments[assignmentId - 1].points_possible;

    //creats 2 objs in an array
    if (learnerId !== uniqueId) {
      const learnerData = { id: learnerId };
      uniqueId = learnerId;
      uniqueIdTracker++;
      result.push(learnerData);
    }
    //Builds the objs in the arr
     if(dateSubmitted <= dateDue){
        isLate = false
       } else if(dateSubmitted > dateDue){
          isLate = true
          score = score * .9
       } else {
        notDue = true;
       }

    if (assignmentId < 3) { //this section of code uploads assignments and calculates scores 
       //code conditon to have var that has already compared curent date with due date to see if there are things not yet due
  
      assignment = result[uniqueIdTracker - 1];
        assignment[assignmentId] = score / totalPoints;
        sum += score;
        totalSum += totalPoints;
        assignment.ave = sum / totalSum;

    }
    console.log(dateSubmitted, dateDue, isLate)
  }
  
  return result;
}else {
  throw "Error: Assignment id doesn't match course id"
}
}catch (err){
console.log(err)
}
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

