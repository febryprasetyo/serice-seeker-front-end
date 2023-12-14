import React, { useEffect, useState } from 'react';

const JobCategoryCard = ({ category }) => {
  const [totalJobs, setTotalJobs] = useState(0);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(
          `https://service-seeker-api.vercel.app/jobs/all?status=all&category=${encodeURIComponent(
            category
          )}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch job data');
        }

        const data = await response.json();
        setTotalJobs(data.totalJobs);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchJobData();
  }, [category]);

  return (
    <div className="category-card">
      <h3>{category}</h3>
      <p>Total Jobs: {totalJobs}</p>
    </div>
  );
};

export default JobCategoryCard;
