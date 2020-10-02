import React from "react";
import Styles from "./InvoicePreview.module.css";

function InvoicePreview({ preview }) {
  return (
    <>
      <div className={Styles.reviewbox}>
        <div className={Styles.review}>Review</div>
        <div className={Styles.reviewitems} onClick={preview}>
          <p>
            <span className={Styles.invoicelabel}>Request By :</span>
            <span className={Styles.invoicedesc}> Anayo Kanayo</span>
          </p>

          <div className={Styles.invoiceimg}>
            <img
              src="https://www.freshbooks.com/wp-content/uploads/2018/05/invoice-hero-full-generic-e1545411829591.png"
              alt="invoice"
            />
            <div className={Styles.download}>
              <i class="fa fa-download" aria-hidden="true">
                <span>Download</span>
              </i>
            </div>
            <div className={Styles.details}>
              <span className={Styles.invoicelabel}>Item(s) :</span>
              <span className={Styles.invoicedesc}> Laptop Battery</span>
            </div>
            <div className={Styles.details}>
              <span className={Styles.invoicelabel}>Amout :</span>
              <span className={Styles.invoicedesc}> Anayo Kanayo</span>
            </div>
            <div className={Styles.details}>
              <span className={Styles.invoicelabel}>Due Date :</span>
              <span className={Styles.invoicedesc}> Anayo Kanayo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoicePreview;
