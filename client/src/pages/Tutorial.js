import React, { useState } from 'react'
import TextInput from "../components/TextInput.js";
import Button from "../components/Button";
const Tutorial = () => {
  const [search, setsearch] = useState("");
    return (
    <div>
      Tutorial
      <TextInput
      small
    text
    placeholder={`Search`}
    value={search}
    handelChange={(e) => setsearch(e.target.value)}
  />
    </div>
    
  )
}

export default Tutorial;
