
// import React from 'react'

// const Resume = () => {
//   return (
//     <div>
//       <h1>Resume</h1>
//     </div>
//   )
// }

// export default Resume 

import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Resume Preview Component
const ResumePreview = React.forwardRef(({ formData, template }, ref) => {
  if (template === "modern") {
    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          color: "#000000",
          width: "210mm",
          minHeight: "297mm",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f7fafe",
        }}
      >
        {/* Left Sidebar */}
        <div
          style={{
            width: "33.3333%",
            backgroundColor: "#1d4ed8",
            color: "#ffffff",
            padding: "1.5rem",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            {formData.name || "Your Name"}
          </h2>
          <p style={{ fontSize: "0.875rem" }}>{formData.email}</p>
          <p style={{ fontSize: "0.875rem" }}>{formData.phone}</p>

          <div style={{ marginTop: "1rem", lineHeight: "1.5", fontSize: "0.875rem" }}>
            {formData.linkedin && (
              <p>
                🔗{" "}
                <a href={formData.linkedin} style={{ textDecoration: "underline", color: "#ffffff" }}>
                  {formData.linkedin}
                </a>
              </p>
            )}
            {formData.github && (
              <p>
                💻{" "}
                <a href={formData.github} style={{ textDecoration: "underline", color: "#ffffff" }}>
                  {formData.github}
                </a>
              </p>
            )}
            {formData.website && (
              <p>
                🌐{" "}
                <a href={formData.website} style={{ textDecoration: "underline", color: "#ffffff" }}>
                  {formData.website}
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div style={{ width: "66.6667%", padding: "1.5rem", gap: "1rem", display: "flex", flexDirection: "column" }}>
          {formData.summary && (
            <section>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #bfdbfe",
                  marginBottom: "0.25rem",
                }}
              >
                Profile Summary
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#1e293b" }}>{formData.summary}</p>
            </section>
          )}

          <section>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                borderBottom: "2px solid #bfdbfe",
                marginBottom: "0.25rem",
              }}
            >
              Experience
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#1e293b" }}>
              {formData.experience || "Add work experience..."}
            </p>
          </section>

          <section>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                borderBottom: "2px solid #bfdbfe",
                marginBottom: "0.25rem",
              }}
            >
              Education
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#1e293b" }}>
              {formData.education || "Add education details..."}
            </p>
          </section>

          {formData.achievements && (
            <section>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  borderBottom: "2px solid #bfdbfe",
                  marginBottom: "0.25rem",
                }}
              >
                Achievements
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#1e293b" }}>{formData.achievements}</p>
            </section>
          )}

          <section>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                borderBottom: "2px solid #bfdbfe",
                marginBottom: "0.25rem",
              }}
            >
              Skills
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
              {formData.skills
                ? formData.skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#dbeafe",
                        color: "#1e40af",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {skill.trim()}
                    </span>
                  ))
                : "Add your skills..."}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Basic Template (default)
  return (
    <div
      ref={ref}
      style={{
        padding: "1.5rem",
        backgroundColor: "#ffffff",
        color: "#000000",
        width: "210mm",
        minHeight: "297mm",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "0.25rem", color: "#2563eb" }}>
        {formData.name || "Your Name"}
      </h2>
      <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#475569" }}>
        {formData.email} | {formData.phone}
      </p>
      <p style={{ marginBottom: "1rem", fontSize: "0.875rem", color: "#2563eb", display: "flex", gap: "0.5rem" }}>
        {formData.linkedin && <a href={formData.linkedin}>🔗 LinkedIn</a>}
        {formData.github && <a href={formData.github}>💻 GitHub</a>}
        {formData.website && <a href={formData.website}>🌐 Website</a>}
      </p>

      {formData.summary && (
        <section style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontWeight: "600", fontSize: "1.125rem" }}>Profile Summary</h3>
          <p>{formData.summary}</p>
        </section>
      )}

      <section style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontWeight: "600", fontSize: "1.125rem" }}>Education</h3>
        <p>{formData.education}</p>
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontWeight: "600", fontSize: "1.125rem" }}>Experience</h3>
        <p>{formData.experience}</p>
      </section>

      {formData.achievements && (
        <section style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontWeight: "600", fontSize: "1.125rem" }}>Achievements</h3>
          <p>{formData.achievements}</p>
        </section>
      )}

      <section>
        <h3 style={{ fontWeight: "600", fontSize: "1.125rem" }}>Skills</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
          {formData.skills
            ? formData.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#dbeafe",
                    color: "#1e40af",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                  }}
                >
                  {skill.trim()}
                </span>
              ))
            : "Add your skills..."}
        </div>
      </section>
    </div>
  );
});
ResumePreview.displayName = "ResumePreview";


// Main Component
const Resume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    website: "",
    summary: "",
    education: "",
    experience: "",
    achievements: "",
    skills: "",
  });

  const [template, setTemplate] = useState("basic");
  const previewRef = useRef();

  const handlePrint = () => {
    const input = previewRef.current;
    if (!input) return;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
      backgroundColor: "#ffffff",
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("My_Resume.pdf");
      })
      .catch((err) => {
        console.error("Failed to generate PDF", err);
        alert("Failed to generate PDF. Please try again. Error: " + err.message);
      });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-2xl font-bold">Resume Builder</h2>
        {[
          "name",
          "email",
          "phone",
          "linkedin",
          "github",
          "website",
          "summary",
          "education",
          "experience",
          "achievements",
          "skills",
        ].map((field) => (
          <div key={field}>
            <label className="font-semibold capitalize">{field}</label>
            <textarea
              name={field}
              rows={["summary", "education", "experience", "achievements", "skills"].includes(field) ? 3 : 1}
              className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="flex gap-4 mt-4">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download PDF
          </button>
        </div>

        <div className="mt-4">
          <label className="font-semibold">Choose Template:</label>
          <select
            className="w-full mt-1 p-2 border rounded-md"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option value="basic">Basic</option>
            <option value="modern">Modern</option>
          </select>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <ResumePreview formData={formData} template={template} ref={previewRef} />
      </div>
    </div>
  );
};

export default Resume;
