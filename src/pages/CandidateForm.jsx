import { FaTrashAlt, FaPlus } from "react-icons/fa"; // Importing icons
import { FaPhotoVideo, FaFilePdf } from 'react-icons/fa';
import FormPreview from "../components/FormPreview";
import { useState } from "react";

const CandidateForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "", dob: "", gender: "", mobileNumber: "", email: "", address: "", });
  const [qualifications, setQualifications] = useState([{ id: 1, qualification: "PG" }]);
  const [experiences, setExperiences] = useState([]);
  const [currentworking, setCurrentWorking] = useState([]);
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [softSkills, setsoftSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [awards, setAwards] = useState([]);
  const [links, setLinks] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const [resumeError, setResumeError] = useState("");

  const [showPreview, setShowPreview] = useState(false);

  
  // Handle input changes for personal details
const handleChange = (e) => {
  const { name, value } = e.target;
  setPersonalDetails({ ...personalDetails, [name]: value });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  const addField = (setter, items) => setter([...items, { id: items.length + 1 }]);
  const removeField = (setter, items, id) => setter(items.filter((item) => item.id !== id));

  const handleSkillAdd = (skill, type) => {
    if (skill.trim()) {
      if (type === "Technical") {
        setTechnicalSkills([...technicalSkills, skill]);
      } else {
        setsoftSkills([...softSkills, skill]);
      }
    }
  };

  const handleSkillRemove = (skill, type) => {
    if (type === "Technical") {
      setTechnicalSkills(technicalSkills.filter((item) => item !== skill));
    } else {
      setsoftSkills(softSkills.filter((item) => item !== skill));
    }
  };

  const handleLinkChange = (index, field, value) => {
    setLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      )
    );
  };

  const handleQualificationChange = (e, id) => {
    const updatedQualifications = qualifications.map((qual) =>
      qual.id === id ? { ...qual, qualification: e.target.value } : qual
    );
    setQualifications(updatedQualifications);
  };
  // Handle file selection for photo and resume
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    const maxPhotoSize = 200000; // 200KB
    const maxResumeSize = 2000000; // 2MB

    if (type === "photo") {
      if (file && file.size <= maxPhotoSize && (file.type === "image/jpeg" || file.type === "image/png")) {
        setPhoto(file);
        setPhotoError("");
      } else {
        setPhotoError("Photo should be PNG/JPG and not more than 200KB.");
        setPhoto(null);
      }
    } else if (type === "resume") {
      if (file && file.size <= maxResumeSize) {
        setResume(file);
        setResumeError("");
      } else {
        setResumeError("Resume should not be more than 2MB.");
        setResume(null);
      }
    }
  };

  return (
    
    
    <div className="bg-[#043873]">
      {/* <Nav/> */}
        <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-md rounded-md space-y-6">
      <h1 className="text-xl text-gray-800 sm:text-xl md:text-2xl font-bold text-center border-b-2 border-yellow-400">Candidate Application Form</h1>
      {/* Personal Details */}
<section className="md:p-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Personal Details</h2>
  <div className="space-y-4 border p-6 rounded-md bg-white shadow-md">
    {/* Grid Layout for Inputs */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Full Name and Date of Birth */}
      {[
        { label: 'Full Name', type: 'text', name: 'fullName', required: true },
        { label: 'Date of Birth', type: 'date', name: 'dob', required: true },
      ].map(({ label, type, name, required }, idx) => (
        <div key={idx} className="relative">
          <label
            htmlFor={name}
            className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input id={name} name={name} type={type} value={personalDetails[name]} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2" required={required}/>
        </div>
      ))}
      {/* Gender Selection */}
      <div>
        <label className="block mb-1 text-sm text-gray-600">
          Gender <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-4">
          {['M', 'F', 'T'].map((gender) => (
            <label key={gender} className="flex items-center space-x-2">
              <input  type="radio" name="gender"  value={gender} checked={personalDetails.gender === gender}
                onChange={handleChange} className="form-radio focus:ring focus:ring-blue-300" required/>
              <span>{gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : 'Other'}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
    {/* Second Row of Inputs */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Mobile Number and Email ID */}
      {[
        { label: 'Mobile Number', type: 'tel', name: 'mobileNumber', required: true },
        { label: 'Email ID', type: 'email', name: 'email', required: true },
      ].map(({ label, type, name, required }, idx) => (
        <div key={idx} className="relative">
          <label
            htmlFor={name}
            className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input id={name}  name={name} type={type} value={personalDetails[name]} onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2" required={required}/>
        </div>
      ))}
    </div>
    {/* Address Input */}
    <div className="relative">
      <label
        htmlFor="address"
        className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600"
      >
        Address <span className="text-red-500">*</span>
      </label>
      <textarea id="address" name="address" value={personalDetails.address} onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2" required
      ></textarea>
    </div>
  </div>
</section>
      
      {/* Qualifications */}
<section className="md:p-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Qualifications</h2>
          <div className="space-y-4 border p-4 rounded-md bg-white shadow-md">
          {qualifications.map((qual, index) => (
    <div key={qual.id} className="space-y-4 border p-4 rounded-md bg-white shadow-md mt-6 relative">
      {/* Select Qualification and School/College/Institute Name in Same Row */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">
            Select Qualification <span className="cursor-pointer text-gray-500" title="Select your highest qualification first">
              <i className="fa fa-info-circle" />
            </span>
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value={qual.qualification}
            onChange={(e) => handleQualificationChange(e, qual.id)}
          >
            <option value="PG">PG</option>
            <option value="UG">UG</option>
            <option value="10+2">10+2</option>
            <option value="10">10</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Show Enter Qualification field only when "Other" is selected */}
        {qual.qualification === "Other" && (
          <div className="relative flex-1 min-w-[200px]">
            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Enter Qualification</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        )}
      </div>

      {/* School/College/Institute Name */}
      <div className="relative mt-4 min-w-[200px]">
        <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">School/College/Institute Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Course and Stream */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Course</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="relative flex-1 min-w-[200px]">
          <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Stream</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Course Duration */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Start Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="relative">
          <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">End Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Board/University and Marks */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Board/University</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="relative flex-1 min-w-[200px]">
          <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">
            Marks (Percentage)
            <span className="cursor-pointer text-gray-500" title="Convert CGPA to Percentage">
              <i className="fa fa-info-circle" />
            </span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Remove Button */}
      {index > 0 && (
        <button
          type="button"
          className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 z-10"
          onClick={() => removeField(setQualifications, qualifications, qual.id)}
        >
          <FaTrashAlt />
        </button>
      )}
    </div>
  ))}

  {/* Add Qualification Button */}
  <button
    type="button"
    className="bg-green-600  text-white p-2 rounded-full mt-4"
    onClick={() => addField(setQualifications, qualifications)}
  >
    <FaPlus />
  </button>
  </div>
</section>

     {/* Work Experience */}
<section className="md:p-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Work Experience</h2>
  <div className="space-y-4 border p-4 rounded-md bg-white shadow-md">
    <label className="block mb-1 text-gray-700 font-medium">Do you have any prior work experience?</label>
    <div className="flex flex-wrap items-center gap-4">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="workExperience"
          value="Yes"
          onChange={() => setExperiences([{ id: 1 }])}
        />
        <span className="text-gray-700">Yes</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="workExperience"
          value="No"
          onChange={() => setExperiences([])}
        />
        <span className="text-gray-700">No</span>
      </label>
    </div>

    {experiences.length > 0 &&
      experiences.map((exp, index) => (
        <div key={exp.id} className="space-y-4 border p-4 rounded-md bg-white shadow-md mt-2 relative">
          {/* Company Name and Designation */}
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Company Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Designation</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Start Date and End Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Start Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">End Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Duties/Responsibilities */}
          <div className="relative mt-4">
            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Duties/Responsibilities (Optional)</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Trash Button */}
          {index > 0 && (
            <button
              type="button"
              className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 z-10"
              onClick={() => removeField(setExperiences, experiences, exp.id)}
            >
              <FaTrashAlt />
            </button>
          )}
        </div>
      ))}

    {/* Add Experience Button */}
    {experiences.length > 0 && (
      <button
        type="button"
        className="bg-green-600  text-white p-2 rounded-full mt-4"
        onClick={() => addField(setExperiences, experiences)}
      >
        <FaPlus />
      </button>
    )}
  </div>
</section>


      {/* Currently Working */}
      <section className="md:p-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Current Company</h2>
        <div className="space-y-4 border p-4 rounded-md bg-white shadow-md">
          <label className="block mb-1 text-gray-700 font-medium">Are you currently working at any company?</label>
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="currentCompany"
                value="Yes"
                onChange={() => setCurrentWorking([{ id: 1 }])}
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="currentCompany"
                value="No"
                onChange={() => setCurrentWorking([])}
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
          {currentworking.length > 0 && (
            <div className="space-y-4 border p-4 rounded-md bg-white shadow-md mt-6">
              {/* Company Name, Joining Date, Position / Designation */}
              <div className="flex flex-wrap gap-4">
                {["Company Name", "Joining Date", "Position / Designation"].map((label, index) => (
                  <div key={index} className="relative flex-1 min-w-[200px]">
                    <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">{label}</label>
                    <input
                      type={label === "Joining Date" ? "date" : "text"}
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="md:p-4">
        <h2 className="text-xl font-semibold">Skills <span className="text-sm text-red-500">Use tab or comma to Add</span></h2>

        <div className="flex space-x-8 mt-4  border p-4 rounded-md bg-white shadow-md"> {/* Flex container for horizontal layout */}
          {/* Technical Skills */}
          <div className="relative flex-1">
            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">
              Technical Skills
            </label>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                onKeyDown={(e) => {
                  if (e.key === "," || e.key === "Tab") {
                    e.preventDefault(); // Prevent the default action for comma or tab key
                    handleSkillAdd(e.target.value, "Technical");
                    e.target.value = "";
                  }
                }}
              />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span>{skill}</span>
                  <FaTrashAlt
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleSkillRemove(skill, "Technical")}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* soft Skills */}
          <div className="relative flex-1">
            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">
              soft Skills
            </label>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                onKeyDown={(e) => {
                  if (e.key === "," || e.key === "Tab") {
                    e.preventDefault(); // Prevent the default action for comma or tab key
                    handleSkillAdd(e.target.value, "soft");
                    e.target.value = "";
                  }
                }}
              />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span>{skill}</span>
                  <FaTrashAlt
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleSkillRemove(skill, "soft")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
<section className="md:p-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Certifications</h2>
  <div className="space-y-4 border p-4 rounded-md bg-white shadow-md">
    <label className="block mb-2">Do you want to add certifications?</label>
    <div className="flex items-center space-x-4">
      {["Yes", "No"].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="certifications"
            value={value}
            onChange={(e) => setCertifications(value === "Yes" ? [{ id: 1 }] : [])}
            className="mr-2"
          />
          {value}
        </label>
      ))}
    </div>

    {certifications.map((cert, index) => (
      <div key={cert.id} className="relative space-y-4 border p-4 rounded-md bg-white shadow-md mb-2">
        {/* Flex container for responsive layout */}
        <div className="flex flex-wrap gap-4">
          {["title", "link", "issuedBy"].map((field, i) => (
            <div key={i} className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">
                {field === "title" ? "Certification Title" : field === "link" ? "Certification Link" : "Issued By"}
              </label>
              <input
                type={field === "link" ? "url" : "text"}
                value={cert[field]}
                onChange={(e) => handleCertificationChange(index, field, e.target.value)}
                required={field !== "link"}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          ))}
        </div>

        {/* Trash Icon positioned at top-right */}
        {index > 0 && (
          <button
            type="button"
            onClick={() => removeField(setCertifications, certifications, cert.id)}
            className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    ))}

    {/* Add Certification Button */}
    {certifications.length > 0 && (
      <button
        type="button"
        onClick={() => addField(setCertifications, certifications)}
        className="bg-green-600  text-white p-2 rounded-full mt-4"
      >
        <FaPlus Certification />
      </button>
    )}
  </div>
</section>


   {/* Projects */}
<section className="md:p-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Projects</h2>
  <div className="space-y-4 border p-4 rounded-md bg-white shadow-md">
    <label className="block mb-2">Do you want to add projects?</label>
    <div className="flex items-center space-x-4">
      {["Yes", "No"].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="projects"
            value={value}
            onChange={(e) => setProjects(value === "Yes" ? [{ id: 1 }] : [])}
            className="mr-2"
          />
          {value}
        </label>
      ))}
    </div>

    {projects.map((proj, index) => (
      <div key={proj.id} className="space-y-4 border p-4 rounded-md bg-white shadow-md relative"> {/* Added relative positioning */}
        <div className="flex flex-wrap gap-4"> {/* Flex container for responsive layout */}
          {["Project Title", "Technologies Used", "Project Link / GitHub Repository"].map((labelText, i) => (
            <div key={i} className="relative flex-1 min-w-[200px]">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">{labelText}</label>
              <input
                type={i === 2 ? "url" : "text"}
                value={proj[i === 2 ? "projectLink" : i === 1 ? "technologiesUsed" : "projectTitle"]}
                onChange={(e) => handleProjectChange(index, i === 2 ? "projectLink" : i === 1 ? "technologiesUsed" : "projectTitle", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          ))}
        </div>

        {/* Trash Icon positioned at top-right */}
        {index > 0 && (
          <button
            type="button"
            onClick={() => removeField(setProjects, projects, proj.id)}
            className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    ))}

    {/* Add Project Button */}
    {projects.length > 0 && (
      <button
        type="button"
        onClick={() => addField(setProjects, projects)}
        className="bg-green-600  text-white p-2 rounded-full mt-4"
      >
        <FaPlus />
      </button>
    )}
  </div>
</section>




    {/* Awards, Honors & Achievements */}
<section className="md:p-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Awards, Honors & Achievements</h2>
  <div className="space-y-4 border p-4 rounded-md bg-white shadow-md">
    <label className="block mb-2">Do you want to add awards/honors?</label>
    <div className="flex items-center space-x-4">
      {["Yes", "No"].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="awardsHonors"
            value={value}
            onChange={(e) => setAwards(value === "Yes" ? [{ id: 1 }] : [])}
            className="mr-2"
          />
          {value}
        </label>
      ))}
    </div>
    {awards.map((award, index) => (
      <div key={award.id} className="relative space-y-4 border p-4 rounded-md bg-white shadow-md">
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Award/Honor/Achievement</label>
            <input
              type="text"
              value={award.name}
              onChange={(e) => handleAwardChange(index, "name", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        {index > 0 && (
          <button
            type="button"
            onClick={() => removeField(setAwards, awards, award.id)}
            className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    ))}
    {awards.length > 0 && (
      <button
        type="button"
        onClick={() => addField(setAwards, awards)}
        className="bg-green-600  text-white p-2 rounded-full mt-4"
      >
        <FaPlus />
      </button>
    )}
  </div>
</section>



      {/* Links */}
<section className="md:p-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Links</h2>
  <div className="space-y-4 border p-4 rounded-md bg-white shadow-md">
    <label className="block mb-2">Do you want to add links?</label>
    <div className="flex items-center space-x-4">
      {["Yes", "No"].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="links"
            value={value}
            onChange={(e) => setLinks(value === "Yes" ? [{ id: 1, type: "", url: "" }] : [])}
            className="mr-2"
          />
          {value}
        </label>
      ))}
    </div>

    {links.map((link, index) => (
      <div key={link.id} className="space-y-4 border p-4 rounded-md bg-white shadow-md relative"> {/* Added relative positioning */}
        <div className="flex flex-wrap gap-4"> {/* Flex container for responsive layout */}
          <div className="relative flex-1 min-w-[200px]">
            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Select Link Type</label>
            <select
              value={link.type}
              onChange={(e) => handleLinkChange(index, "type", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              {["", "HackerRank", "CodeChef", "LeetCode", "Portfolio", "GitHub", "LinkedIn"].map((option, i) => (
                <option key={i} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Link</label>
            <input
              type="url"
              value={link.url}
              onChange={(e) => handleLinkChange(index, "url", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        {/* Trash Icon positioned at top-right */}
        {index > 0 && (
          <button
            type="button"
            onClick={() => removeField(setLinks, links, link.id)}
            className="absolute -top-4 right-0 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    ))}

    {/* Add Link Button */}
    {links.length > 0 && (
      <button
        type="button"
        onClick={() => addField(setLinks, links)}
        className="bg-green-600  text-white p-2 rounded-full mt-4"
      >
        <FaPlus />
      </button>
    )}
  </div>
</section>


      {/* Upload Section */}
      <section className="md:p-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Upload Documents</h2>
            <div className="flex flex-wrap gap-6">
              {/* Upload Photo */}
              <div className="flex-1 border border-gray-300 rounded-md p-4 bg-white text-center">
                <label className="block mb-2 text-sm text-gray-600">Upload Photo</label>
                <div
                  className="flex flex-col items-center justify-center space-y-2 border-dashed border-2 border-gray-400 p-4 cursor-pointer"
                  onClick={() => document.getElementById("photo-input").click()}
                >
                  <FaPhotoVideo className="text-4xl text-gray-500" />
                  <p className="text-sm text-gray-500">Browse</p>
                  <input
                    type="file"
                    id="photo-input"
                    className="hidden"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleFileChange(e, "photo")}
                  />
                </div>
                {photo && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Selected Photo: {photo.name}</p>
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="Preview"
                      className="mt-2 w-32 h-32 object-center border"
                    />
                  </div>
                )}
                {photoError && <p className="text-sm text-red-500 mt-2">{photoError}</p>}
              </div>

              {/* Upload Resume/CV */}
              <div className="flex-1 border border-gray-300 rounded-md p-4 bg-white text-center">
                <label className="block mb-2 text-sm text-gray-600">Upload Resume/CV</label>
                <div
                  className="flex flex-col items-center justify-center space-y-2 border-dashed border-2 border-gray-400 p-4 cursor-pointer"
                  onClick={() => document.getElementById("resume-input").click()}
                >
                  <FaFilePdf className="text-4xl text-gray-500" />
                  <p className="text-sm text-gray-500">Browse</p>
                  <input
                    type="file"
                    id="resume-input"
                    className="hidden"
                    accept=".pdf, .doc, .docx"
                    onChange={(e) => handleFileChange(e, "resume")}
                  />
                </div>
                {resume && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Selected Resume: {resume.name}</p>
                    <iframe
                      src={URL.createObjectURL(resume)}
                      title="Resume Preview"
                      className="mt-2 w-full h-48 border"
                    ></iframe>
                  </div>
                )}
                {resumeError && <p className="text-sm text-red-500 mt-2">{resumeError}</p>}
              </div>
            </div>
      </section>
      
      {/* Buttons */}
      <div className="flex justify-between mt-6">
          {/* Preview Button */}
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Preview
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
      {/* Preview Section */}
      {showPreview && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
          <FormPreview data={{ personalDetails, qualifications }} />
          <button
            onClick={() => setShowPreview(false)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Close Preview
          </button>
        </div>
      )}
    </div>
  );
};

export default CandidateForm;
