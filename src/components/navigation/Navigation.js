import React from "react";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/jeopardy">Jeopardy</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
