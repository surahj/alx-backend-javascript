const updateStudentGradeByCity = (getListStudents, city, newGrades) => {
  const studentsByCity = getListStudents.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      let grade = 'N/A';
      if (grades[0]) grade = grades[0].grade;

      return { ...student, grade };
    });
  return studentsByCity;
};

export default updateStudentGradeByCity;
