import Angular from '../assets/angular.jpg';
import Bootstrap from '../assets/bootstrap5.png';
import Ccsharp from '../assets/ccsharp.png';
import Kompleweb from '../assets/kompleweb.jpg';

function Course({ courseName }) {
    console.log(courseName);
    return (
        <div>
            <img src={Angular} />
        </div>
    )
}

export default Course