import { useEffect, useState } from 'react';

const LoadDataFromExternal = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Courses.json')
            .then(res => res.json())
        .then(data=>setCourses(data))
    }, []);
    return[courses]
};

export default LoadDataFromExternal;