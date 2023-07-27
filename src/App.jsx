import './App.css'
import Course from './components/Course';
import { useState } from 'react';


function getRandomCourse() {
  const courseArray = ['Angular', 'Bootstrap', 'Ccsharp', 'KompleWeb'];
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  }

  return (
    <div>
      <button onClick={handleClick}>Course Add</button>
      {courses.map((course, id) => (
        <Course key={id} courseName={course} />
      ))}
    </div>
  )
}

export default App
