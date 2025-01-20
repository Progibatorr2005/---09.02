type Course = {name: string; lessons: string[];
};

function isComplete(course: Course): boolean {
  return course.lessons.length >= 4;
}


const course1 = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};

const course2 = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions', '123'],
};

console.log(isComplete(course1));
console.log(isComplete(course2));
