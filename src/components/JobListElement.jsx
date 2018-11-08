import React from "react";
import "./JobListElement.css";

export const JobListElementMetaItem = ({
  emoji,
  metaItem
}) => <span>{emoji} {metaItem}</span>;


export const JobListElementMeta = ({
  company,
  location,
  salary
}) =>
      <p className="job_info">
        <JobListElementMetaItem 
          emoji="🏢 "
          metaItem={company}
        />
        {' | '}
        <JobListElementMetaItem 
          emoji="🌍 "
          metaItem={location}
        />
        {' | '}
        <JobListElementMetaItem 
          emoji="💰$"
          metaItem={salary}
        />
      </p>;


const JobListElement = ({
  title,
  company,
  salary,
  location
}) => 
      <a href="#" className="job-item">
        <div>
          <h2 className="job-item_title">{title}</h2>
          <JobListElementMeta 
            company={company}
            location={location}
            salary={salary}
          />
        </div>
      </a>;


JobListElement.defaultProps = {
  location: 'Not specified',
  salary: 'Not given'
};

export default JobListElement;