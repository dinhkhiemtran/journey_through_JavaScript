//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class GradeSchool {
  constructor() {
    this.rostLists = {};
    this.studentGradeList = {};
    
  }
  roster() {
    return JSON.parse(JSON.stringify(this.rostLists));
  }
  add(name, grade) {
    this.deleteIfExists(name);
    this.studentGradeList[name] = grade;
    this.rostLists[grade] = this.grade(grade).concat(name).sort();
    console.log(JSON.parse(JSON.stringify(this.rostLists)));
  }

  grade(grade) {
    return Array.from(this.rostLists[grade] || []);
  }
  deleteIfExists(name) {
    if (this.studentGradeList.hasOwnProperty(name)) {
      let grade = this.studentGradeList[name];
      this.rostLists[grade] = this.rostLists[grade].filter(
        (item) => item != name
      );
    }
  }
}
const school = new GradeSchool();
school.add("Franklin", 5);
school.add("Bradley", 5);
school.add("Bradley", 5);
school.add("Jeff", 1);
