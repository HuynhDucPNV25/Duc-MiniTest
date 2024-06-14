import React from "react";
import "../assets/index.css"
export const Scores = ({ courseName, courseResults }) => {
  return (
    <div className="scores">
      <h1>{courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((item,index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td className="warning">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};