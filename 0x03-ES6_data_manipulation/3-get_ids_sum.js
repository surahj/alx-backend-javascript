const getStudentIdsSum = (getListStudents) => getListStudents.reduce(
  (acc, student) => acc + student.id,
  0,
);
export default getStudentIdsSum;
