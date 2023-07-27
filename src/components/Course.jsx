import Angular from '../assets/angular.jpg';
import Bootstrap from '../assets/bootstrap5.png';
import Ccsharp from '../assets/ccsharp.png';
import KompleWeb from '../assets/kompleweb.jpg';

const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb,
}

function Course({ courseName }) {

    console.log(courseMap[courseName]);
    return (
        <div>
            <img src={courseMap[courseName]} alt='course' />
        </div>
    )
}

export default Course