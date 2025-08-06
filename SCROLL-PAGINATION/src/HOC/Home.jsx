import React, { useEffect, useState } from 'react';
import withLoading from './withLoading';
import StudentProfile from './StudentProfile';

const StudentWithLoading = withLoading(StudentProfile);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setStudent({ name: 'john doe' });
    }, 2000);
  }, []);

  return (
    <div>
      <StudentWithLoading isLoading={loading} name={student.name} />
    </div>
  );
};

export default Home;
