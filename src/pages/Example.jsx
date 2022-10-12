import React, { useState } from "react";

import Container from "components/Layout";

function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <p>{email}</p>
      <input
        className="bg-neutral-200 p-3 rounded-2xl border border-neutral-300"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="bg-neutral-200 p-3 rounded-2xl border border-neutral-300"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </Container>
  );
}

export default Example;
