import React from 'react';
import AdminComments from '../components/AdminComments';  // Import AdminComments component
import AdminReviews from '../components/AdminReviews';    // Import AdminReviews component

const AdminReviewComment = () => {
  return (
    <div className="admin-dashboard bg-while ">
      <h1 className="text-3xl text-yellow-950 text-center font-bold mb-6">ADMIN REVIEW</h1>

      {/* Flexbox container to arrange Comments and Reviews side by side */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section for Comments */}
        <div className="w-full lg:w-1/2 bg--100 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">COMMENTS</h2>
          <AdminComments /> {/* Render the AdminComments component */}
        </div>

        {/* Right Section for Reviews */}
        <div className="w-full lg:w-1/2 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">REVIEWS</h2>
          <AdminReviews /> {/* Render the AdminReviews component */}
        </div>
      </div>
    </div>
  );
};

export default AdminReviewComment;