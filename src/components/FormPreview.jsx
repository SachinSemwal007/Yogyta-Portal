import React from "react";

const FormPreview = ({ data }) => {
  const { personalDetails, qualifications } = data;

  return (
    <div className="resume-preview">
      <h1>Resume Preview</h1>
      
      {/* Personal Details */}
      <section>
        <h2>Personal Details</h2>
        <p><strong>Full Name:</strong> {personalDetails.fullName}</p>
        <p><strong>Date of Birth:</strong> {personalDetails.dob}</p>
        <p><strong>Gender:</strong> {personalDetails.gender}</p>
        <p><strong>Mobile Number:</strong> {personalDetails.mobileNumber}</p>
        <p><strong>Email ID:</strong> {personalDetails.email}</p>
        <p><strong>Address:</strong> {personalDetails.address}</p>
      </section>

      {/* Qualifications */}
      <section>
        <h2>Qualifications</h2>
        {qualifications.map((qual) => (
          <div key={qual.id}>
            <p><strong>Qualification:</strong> {qual.qualification}</p>
            <p><strong>School/College/Institute Name:</strong> {qual.instituteName}</p>
            <p><strong>Course:</strong> {qual.course}</p>
            <p><strong>Stream:</strong> {qual.stream}</p>
            <p><strong>Start Date:</strong> {qual.startDate}</p>
            <p><strong>End Date:</strong> {qual.endDate}</p>
            <p><strong>Board/University:</strong> {qual.board}</p>
            <p><strong>Marks (Percentage):</strong> {qual.marks}</p>
          </div>
        ))}
      </section>

      {/* Add more sections as needed (Experience, Skills, etc.) */}
    </div>
  );
};

export default FormPreview;
