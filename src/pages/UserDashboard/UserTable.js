import React from "react";
import { Table, Dropdown } from "react-bootstrap";
import Styles from "./UserDashboard.module.css";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span className={Styles.threedots} />
  </a>
));
function UserTable() {
  return (
    <>
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
            <th></th>
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
            <td>View More</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} />
                <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header>Options</Dropdown.Header>
                  <Dropdown.Item>abcd</Dropdown.Item>
                  <Dropdown.Item>erty</Dropdown.Item>
                  <Dropdown.Item>hnjm</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
            <td>View More</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} />
                <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header>Options</Dropdown.Header>
                  <Dropdown.Item>abcd</Dropdown.Item>
                  <Dropdown.Item>erty</Dropdown.Item>
                  <Dropdown.Item>hnjm</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
            <td>View More</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} />
                <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header>Options</Dropdown.Header>
                  <Dropdown.Item>abcd</Dropdown.Item>
                  <Dropdown.Item>erty</Dropdown.Item>
                  <Dropdown.Item>hnjm</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default UserTable;
