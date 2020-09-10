import React from "react";
import { Table } from "react-bootstrap";
import Styles from "./Audit.module.css";

function AuditTable({ onClick }) {
  return (
    <>
      <Table className={Styles.table} responsive>
        <thead className={Styles.thead}>
          <tr>
            <th>
              <input className={Styles.checkbox} type="checkbox" />
            </th>
            <th>Vendor</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Invoice N0.</th>
            <th>Due Date</th>
            <th>Members</th>
            <th>Request</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={Styles.tbody}>
          <tr>
            <td>
              {" "}
              <input className={Styles.checkbox} type="checkbox" />
            </td>
            <td>Jumia</td>
            <td>Laptop Charger</td>
            <td>N 32,000</td>
            <td>180213-001</td>
            <td>15/10/2020</td>
            <td className={Styles.members}>
              <span>AK</span>
              <span>VO</span>
              <span>KN</span>
            </td>

            <td>
              <div className={Styles.statusbackground}>
                <span className={Styles.dot}></span>Pending
              </div>
            </td>
            <td onClick={onClick}>
              <span className={Styles.previewbutton}>Preview</span>{" "}
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <input className={Styles.checkbox} type="checkbox" />
            </td>
            <td>Jumia</td>
            <td>Laptop Charger</td>
            <td>N 32,000</td>
            <td>180213-001</td>
            <td>15/10/2020</td>
            <td className={Styles.members}>
              <span>AK</span>
              <span>VO</span>
              <span>KN</span>
            </td>

            <td>
              <div className={Styles.statusbackground}>
                <span className={Styles.dot}></span>Pending
              </div>
            </td>
            <td>
              <span className={Styles.previewbutton}>Preview</span>{" "}
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <input className={Styles.checkbox} type="checkbox" />
            </td>
            <td>Jumia</td>
            <td>Laptop Charger</td>
            <td>N 32,000</td>
            <td>180213-001</td>
            <td>15/10/2020</td>
            <td className={Styles.members}>
              <span>AK</span>
              <span>VO</span>
              <span>KN</span>
            </td>

            <td>
              <div className={Styles.statusbackground}>
                <span className={Styles.dot}></span>Pending
              </div>
            </td>
            <td>
              <span className={Styles.previewbutton}>Preview</span>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default AuditTable;
