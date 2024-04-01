interface person {
  name: string;
  id: number;
}

const person = {
  name: "shubahm",
  id: 1,
};

interface student {
  name: string;
  class: number;
  rollNum: number;
}

const student = {
  name: "rahul",
};

//Union

let obj: student | person;

obj = {
  name: "shubham",
  rollNum: 12,
  class: 7,
};
