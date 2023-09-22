import React from "react";
import "./certifications.css";
import { ICertificate } from "./../interfaces/resume.interface";

function Certificate({
  certificate,
  index,
}: {
  certificate: ICertificate;
  index: number;
}) {
  return <li key={index}>
    <p>
      {certificate.name}
      {certificate.link && (
        <a
          style={{
            marginLeft: "2mm",
          }}
          href={certificate.link}
        >
          {certificate.linkDisplayText
            ? certificate.linkDisplayText
            : certificate.link}{" "}
        </a>
      )}
    </p>
    {certificate.organizationName ? (
      <p>
        {certificate.organizationName}
        {certificate.certificateId && (
          <span>
            {" "}
            | Certificate Id <b>{certificate.certificateId}</b>
          </span>
        )}
      </p>
    ) : (
      certificate.certificateId && (
        <span>
          {" "}
          Certificate Id <b>{certificate.certificateId}</b>
        </span>
      )
    )}
  </li>;
}

function Certifications({
  certifications,
}: {
  certifications: ICertificate[];
}) {
  return (
    <div className="container">
      <div className="left">
        <ul>
          {certifications.map(
            (content, index) =>
              index % 2 === 0 && (
                <Certificate certificate={content} index={index}></Certificate>
              )
          )}
        </ul>
      </div>
      <div className="left">
        <ul>
          {certifications.map(
            (content, index) =>
              index % 2 !== 0 && <Certificate certificate={content} index={index}></Certificate>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Certifications;
