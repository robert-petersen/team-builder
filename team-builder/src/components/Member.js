import React from "react";

export default function MembersList(props){
  const {memberInfo} = props;

  if (!memberInfo) return <h4>Loading Members...</h4>

  return (
    <div className="memberContainer">
      <h3>{memberInfo.name}</h3>
      <p>{memberInfo.email}</p>
      <p>{memberInfo.role}</p>
    </div>
  )
}