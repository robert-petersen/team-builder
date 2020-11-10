import React from "react";
import styled from 'styled-components';

export default function MembersList(props){
  const {memberInfo} = props;

  if (!memberInfo) return <h4>Loading Members...</h4>

  return (
    <MemberStyles>
      <h3>{memberInfo.name}</h3>
      <p>{memberInfo.email}</p>
      <p>{memberInfo.role}</p>
    </MemberStyles>
  )
}

const MemberStyles = styled.div`
  border: 3px soild black;
  h3{
    margin: 10px 0;

  }
`;
