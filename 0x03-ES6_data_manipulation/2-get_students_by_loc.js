const getStudentsByLocation = (students, city) => {
  if (Object.getPrototypeOf(students) !== Array.prototype)
    return [];

  return students.filter((student) => student.location.toLowerCase() === city.toLowerCase());
}

export default getStudentsByLocation;
