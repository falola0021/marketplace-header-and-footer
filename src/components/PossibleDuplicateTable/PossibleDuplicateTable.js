import React from "react";

import { Table } from "react-bootstrap";

function PossibleDuplicate() {
  return (
    <>
      <Table bordered hover size="xs" style={{ fontSize: "10px" }}>
        <thead>
          <tr style={{ cursor: "pointer" }}>
            <th></th>
            <th>Title</th>
            <th>Requester</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ cursor: "pointer" }}>
            <td>1</td>
            <td>Buy a macbook</td>
            <td>Anayo</td>
            <td>20/10/2020</td>
            <td>approved</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Buy a macbook</td>
            <td>Anayo</td>
            <td>20/10/2020</td>
            <td>approved</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default PossibleDuplicate;
