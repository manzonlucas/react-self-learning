import React from "react";

export default function Saludar(props) {
  return (
    <div>
      <h2>El usuario {props.userInfo.name} tiene {props.userInfo.edad} años, y su color favorito es {props.userInfo.color} </h2>
    </div>
  )
}
