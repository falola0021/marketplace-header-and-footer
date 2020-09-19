import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Table, Dropdown } from "react-bootstrap";
import Styles from "./DepartmentHead.module.css";
import PreviewRequest from "./PreviewRequest/PreviewRequest";

function UserTable({ onClick, handlePreviewShow }) {
  return (
    <>
      <div className={Styles.tablebox}>
        <Table responsive>
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
              <th>Progress</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className={Styles.tbody}>
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span
                  onClick={handlePreviewShow}
                  className={Styles.previewbutton}
                >
                  Preview
                </span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
            <tr onClick={onClick}>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
              <td className={Styles.lines}>
                <span></span>
                <span></span>
                <span></span>
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
      </div>
    </>
  );
}

export default UserTable;
