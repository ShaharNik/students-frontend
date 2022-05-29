import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [students, setStudents] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://localhost:7119/unSubmitted")
    const data = await response.json()
    //console.log(data)
    setStudents(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {students.length > 0 && (
        <ul>
          {students.map(student => (
            <li key={student.studentId}>student id:{student.studentId} first name:{student.firstName} last name:{student.lastName} nation:{student.nation}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AsyncAwait
