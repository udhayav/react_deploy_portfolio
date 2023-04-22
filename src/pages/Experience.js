import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Senthil Matriculation higher secondary school,Puducherry
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Secondary School Leaving Certificate
          </h4>
          <p>  83.2%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Amalorpavam higher secondary school, Puducherry
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Higher Secondary School Certificate
          </h4>

          <p> 85.6%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Pondicherry Technological University, Puducherry
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mechanical Engineering
          </h4>
          <p>8.30 CGPA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon/>}
          
        >
          <h3 className="vertical-timeline-element-title">
          Alliance Française de Pondichéry
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            DELF-A2
          </h4>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;