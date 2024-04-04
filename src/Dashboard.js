import React from "react";
import Footer from "./custom_components/Footer";
import Header from "./custom_components/Header";
import Add_post from "./custom_components/Add_post";
import Edit_post from "./custom_components/Edit_post";

function Dashboard() {
  let key = 12345678; // To be taken from databse
  let tabs = ["Dashboard", "Edit", "Enquiries", "Ratings"];
  let tabs_link = [
    `/admin-dashboard-${key}`,
    "#edit-post",
    "#enquiries",
    "#ratings",
  ];
  let btn = [null, "Sign Out"];
  let btn_links = ["", "/sign-out"];
  return (
    <div>
      <Header
        btn={btn}
        btn_links={btn_links}
        home={true}
        tabs={tabs}
        tab_links={tabs_link}
      />
      <Add_post />

      <section id="edit-post-list">
        <div className="section-heading">
          <h2> Edit OR Delete </h2>
        </div>
        <div id="edit-list">
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
          <Edit_post news_num={1} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Dashboard;
