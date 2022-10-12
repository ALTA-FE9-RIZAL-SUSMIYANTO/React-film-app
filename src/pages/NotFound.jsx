import React from "react";

import Container from "components/Layout";
import { useTitle } from "utils/hooks/useTitle";

function NotFound() {
  useTitle("404 Not Found :(");

  return (
    <Container>
      <p className="text-center">Maaf, Kamu Tidak Bisa Mengakses Ya!!!!</p>
    </Container>
  );
}

export default NotFound;
