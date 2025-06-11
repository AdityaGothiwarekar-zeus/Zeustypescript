import React, { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStat, setActiveStat] = useState("courses");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<number | null>(null);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);


  const navItems = [
    {
      label: "DASHBOARD",
      subItems: [{ label: "Overview" }, { label: "Stats" }],
    },
    {
      label: "CONTENT",
      subItems: [
        {
          label: "Courses",
          subSubItems: [{ label: "Active Courses" }, { label: "Archived Courses" }],
        },
        { label: "Modules" },
      ],
    },
    {
      label: "USERS",
      subItems: [{ label: "Students" }, { label: "Teachers" }, { label: "Admins" }],
    },
    {
      label: "REPORTS",
      subItems: [{ label: "Daily" }, { label: "Monthly" }, { label: "Yearly" }],
    },
    {
      label: "ADMIN",
      subItems: [{ label: "Settings" }, { label: "Permissions" }],
    },
  ];

 const announcements = [
    {
      id: 1,
      title: "No classes will be held on 21st Nov",
      pa: "PA: Wilson Kumar",
      attachment: "2 files are attached",
      date: "15-Sep-2018 at 07:21 pm",
      seen: true,
    },
    {
      id: 2,
      title: "Guest lecture on Geometry on 20th September",
      pa: "PA: Samson White",
      attachment: "2 files are attached",
      date: "15-Sep-2018 at 07:21 pm",
      seen: false,
    },
    {
      id: 3,
      title: "Additional course materials available on request",
      pa: "PA: Wilson Kumar",
      course: "Mathematics 101",
      date: "15-Sep-2018 at 07:21 pm",
      seen: true,
    },
    {
      id: 4,
      title: "No classes will be held on 25th Dec",
      pa: "PA: Wilson Kumar",
      date: "15-Sep-2018 at 07:21 pm",
      seen: false,
    },
    {
      id: 5,
      title: "Additional course materials available on request",
      pa: "PA: Wilson Kumar",
      course: "Mathematics 101",
      date: "15-Sep-2018 at 07:21 pm",
      seen: false,
    },
  ];

  const toggleAnnouncements = () => {
    setIsAnnouncementOpen(!isAnnouncementOpen);
    if (!isAnnouncementOpen) {
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }
  };

  const courses = [
    {
      img: "imageMask-1.svg",
      title: "Acceleration",
      desc: "Physics | Grade 7 +2",
      units: 4,
      lessons: 18,
      topics: 24,
      class: "Mr. Frank's Class B",
      date: "21-Jan-2020 to 21-Aug-2020",
      students: "50",
      expired: false,
    },
    {
      img: "imageMask-2.svg",
      title: "Displacement, Velocity and Speed",
      desc: "Physics | Grade 6 +3",
      units: 2,
      lessons: 15,
      topics: 20,
      class: "No Classes",
      expired: false,
    },
    {
      img: "imageMask.svg",
      title: "Introduction to Biology: Micro organisms and how they affect",
      desc: "Biology | Grade 4 +1",
      units: 5,
      lessons: 16,
      topics: 22,
      class: "All Classes",
      students: "300",
      expired: false,
    },
    {
      img: "imageMask-3.svg",
      title: "Introduction to High School Mathematics",
      desc: "Mathematics | Grade 8 +3",
      units: "--",
      lessons: "",
      topics: "",
      class: "Mr. Frank's Class A",
      date: "14-Oct-2019 to 20-Oct-2020",
      students: "44",
      expired: true,
    },
  ];
  const notifications = [
  {
    id: 1,
    title: "License for Introduction to Algebra has been assigned to your school",
    timestamp: "15-Sep-2018 at 07:21 pm",
    icon: "circle",
  },
  {
    id: 2,
    title: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
    subtext: "Course: Advanced Mathematics",
    timestamp: "15-Sep-2018 at 05:21 pm",
    icon: "tick",
  },
  {
    id: 3,
    title: "23 new students created",
    timestamp: "14-Sep-2018 at 01:21 pm",
    icon: "circle",
  },
  {
    id: 4,
    title: "15 submissions ready for evaluation",
    subtext: "Class: Basics of Algebra",
    timestamp: "13-Sep-2018 at 01:15 pm",
    icon: "circle",
  },
  {
    id: 5,
    title: "License for Basic Concepts in Geometry has been assigned to your...",
    timestamp: "15-Sep-2018 at 07:21 pm",
    icon: "circle",
  },
  {
    id: 6,
    title: "Lesson 3 Practice Worksheet overdue for Sam Diego",
    subtext: "Course: Advanced Mathematics",
    timestamp: "15-Sep-2018 at 05:21 pm",
    icon: "tick",
  },
];


  const toggleDropdown = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      setOpenDropdown(index);
      setOpenSubDropdown(null);
    }
  };

  const toggleSubDropdown = (index: number) => {
    if (openSubDropdown === index) {
      setOpenSubDropdown(null);
    } else {
      setOpenSubDropdown(index);
    }
  };
  const toggleNotifications = () => {
  setIsNotificationOpen(!isNotificationOpen);
  if (!isNotificationOpen) {
    setIsMenuOpen(false);
    setIsAnnouncementOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }
};


  return (
    <div className="page-container">
      {/* Header */}
      <div className="header-nav">
        <header className={`top-bar ${isMenuOpen ? "menu-open" : ""}`}>
          <div className="logo-section">
            <img
              src="assets/icons/logo used in header.svg"
              alt="Quantum Logo"
              className="logo"
            />
          </div>
          <div className="header-right">
            <nav className="top-nav">
              <div className="nav-links-desktop">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => setActiveIndex(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="top-icons" style={{ position: "relative" }}>
              <div className="icon-with-badge">
                <img src="assets/icons/alerts.svg" alt="Notifications" />
                <span className="badge">1</span>
              </div>

              {/* Announcement Icon */}
               <div
        className="icon-with-badge"
        style={{ cursor: "pointer", position: "relative" }}
        onClick={toggleAnnouncements}
      >
        <img
      src={
        isAnnouncementOpen
          ? "assets/icons/icons8-announcement-30.svg"
          : "assets/icons/announcements.svg"
      }
    alt="Announcements"
  />
        {!isAnnouncementOpen && <span className="badge">2</span>}

        {isAnnouncementOpen && (
  <div className="announcement-dropdown updated-announcements">
    {[
      {
        id: 1,
        sender: "PA: Wilson Kumar",
        title: "No classes will be held on 21st Nov",
        desc: "2 files are attached",
        timestamp: "15-Sep-2018 at 07:21 pm",
        icon: "tick",
      },
      {
        id: 2,
        sender: "PA: Samson White",
        title: "Guest lecture on Geometry on 20th September",
        desc: "2 files are attached",
        timestamp: "15-Sep-2018 at 07:21 pm",
        icon: "circle",
      },
      {
        id: 3,
        sender: "PA: Wilson Kumar",
        title: "Additional course materials available on request",
        desc: "Course: Mathematics 101",
        timestamp: "15-Sep-2018 at 07:21 pm",
        icon: "tick",
      },
      {
        id: 4,
        sender: "PA: Wilson Kumar",
        title: "No classes will be held on 25th Dec",
        desc: "",
        timestamp: "15-Sep-2018 at 07:21 pm",
        icon: "circle",
      },
      {
        id: 5,
        sender: "PA: Wilson Kumar",
        title: "Additional course materials available on request",
        desc: "Course: Mathematics 101",
        timestamp: "15-Sep-2018 at 07:21 pm",
        icon: "circle",
      },
    ].map((announcement) => (
  <div key={announcement.id} className="announcement-item-styled">
    <div className="announcement-text">
      <strong>{announcement.sender}</strong>
      <div>{announcement.title}</div>
      {announcement.desc && <div className="desc">{announcement.desc}</div>}
      <div className="timestamp">{announcement.timestamp}</div>
    </div>
    <div className="announcement-status-icon">
      <img
        src={
          announcement.icon === "tick"
            ? "/assets/images/tick.svg"
            : "/assets/images/untick.svg"
        }
        alt={announcement.icon}
        className="announcement-icon"
      />
    </div>
  </div>
))}

    <div className="announcement-actions">
      <button className="show-all-btn">SHOW ALL</button>
      <button className="create-new-btn">CREATE NEW</button>
    </div>
  </div>
)}
      </div>


              <div className="icon-with-badge">
  <img
    src="assets/images/image (2).svg"
    alt="Profile"
    style={{ borderRadius: "50%", border: "2px solid green" }}
  />
  <span
    className="badge"
    style={{ backgroundColor: "white", color: "black" }}
  >
    T
  </span>
</div>


              {/* Hamburger menu */}
              <div
                className="hamburger-dropdown-menu"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsAnnouncementOpen(false); // close announcements if hamburger opens
                }}
              >
                <img src="assets/icons/hamburger-menu.svg" alt="Menu" />
              </div>
            </div>
          </div>

          {/* Hamburger Dropdown Menu */}
          {isMenuOpen && (
            <div className="hamburger-dropdown-container">
              {navItems.map((item, index) => (
                <div key={item.label} className="dropdown-item">
                  <div
                    className="dropdown-label"
                    onClick={() => toggleDropdown(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.label}
                    <span className="dropdown-arrow">
                      {openDropdown === index ? "▲" : "▼"}
                    </span>
                  </div>
                  {openDropdown === index && item.subItems && (
                    <div className="dropdown-submenu">
                      {item.subItems.map((subItem, subIndex) => (
                        <div key={subItem.label} className="submenu-item">
                          {subItem.subSubItems ? (
                            <>
                              <div
                                className="submenu-label"
                                onClick={() => toggleSubDropdown(subIndex)}
                                style={{ cursor: "pointer" }}
                              >
                                {subItem.label}
                                <span className="dropdown-arrow">
                                  {openSubDropdown === subIndex ? "▲" : "▼"}
                                </span>
                              </div>
                              {openSubDropdown === subIndex && (
                                <div className="subsubmenu-menu">
                                  {subItem.subSubItems.map((subSubItem, subSubIndex) => (
                                    <div
                                      key={subSubIndex}
                                      className="subsubmenu-item"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveIndex(index);
                                      }}
                                      style={{ cursor: "pointer" }}
                                    >
                                      {subSubItem.label}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <div
                              className="submenu-simple-item"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveIndex(index);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              {subItem.label}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </header>
      </div>

      {/* Content */}
      <div className="content-wrap">
        {/* Stats Bar */}
        <section className="stats-bar">
          <div
            className={`stats-box ${activeStat === "courses" ? "active" : ""}`}
            onClick={() => setActiveStat("courses")}
            style={{ cursor: "pointer" }}
          >
            <img src="/assets/icons/courses.svg" alt="Courses" />
            <span>
              <strong style={{ fontSize: "1.5rem" }}>4</strong> Courses
            </span>
          </div>
          <div
            className={`stats-box ${activeStat === "classes" ? "active" : ""}`}
            onClick={() => setActiveStat("classes")}
            style={{ cursor: "pointer" }}
          >
            <img src="/assets/icons/classes.svg" alt="Classes" />
            <span>
              <strong style={{ fontSize: "1.5rem" }}>4</strong> Classes
            </span>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="filter-bar">
          <span>Showing 4 of 4 courses</span>
          <div className="sort">
            <span>Sort By:</span>
            <select>
              <option>Course Name</option>
            </select>
            <img src="/assets/icons/sort.svg" alt="Sort Icon" />
          </div>
        </section>

        {/* Course Grid */}
        <main className="course-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index} style={{ position: "relative" }}>
              {course.expired && <div className="expired-badge">EXPIRED</div>}

              <img
                src="/assets/icons/favourite.svg"
                className="fav-icon"
                alt="Favorite"
              />
              <div className="thumb-info-wrapper">
                <img
                  src={`/assets/images/${course.img}`}
                  className="course-thumb"
                  alt="Course"
                />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>
                    {(() => {
                      const match = course.desc.match(/(.+?)(\s\+\d+)/);
                      if (match) {
                        return (
                          <>
                            {match[1]}{" "}
                            <span className="highlight-plus">{match[2]}</span>
                          </>
                        );
                      } else {
                        return course.desc;
                      }
                    })()}
                  </p>
                  <p>
                    {course.units !== "--" ? (
                      <>
                        <strong>{course.units}</strong> Units{" "}
                        <strong>{course.lessons}</strong> Lessons{" "}
                        <strong>{course.topics}</strong> Topics
                      </>
                    ) : (
                      <strong> </strong>
                    )}
                  </p>
                  <div className="custom-select-wrapper">
                    <select>
                      <option>{course.class}</option>
                    </select>
                  </div>
                  {course.students && (
                    <p>
                      {course.students} Students {course.date && `| ${course.date}`}
                    </p>
                  )}
                </div>
              </div>
              <div className="icons">
                <img src="/assets/icons/preview.svg" alt="Preview" />
                <img
                  src="/assets/icons/manage course.svg"
                  alt="Manage Course"
                  style={{ opacity: index === 1 || index === 2 ? 0.4 : 1 }}
                />
                <img
                  src="/assets/icons/grade submissions.svg"
                  alt="Grade Submissions"
                  style={{ opacity: index === 1 || index === 2 ? 0.4 : 1 }}
                />
                <img src="/assets/icons/reports.svg" alt="Reports" />
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Footer Links */}
      <div className="page-footer-links">
        <a href="#">About</a>
        <span
          style={{ color: "#838585", fontWeight: "normal", fontSize: "1.25rem" }}
        >
          {" "}
          |{" "}
        </span>
        <a href="#">Contact Us</a>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <div className="page-footer-content">
          <img
            src="/assets/icons/logo used in footer.svg"
            alt="Quantum Logo"
            className="page-footer-logo"
          />
          <span className="page-footer-separator">|</span>
          <p className="page-footer-text">Copyright © 2020–2021</p>
          <p className="page-footer-text company-name">
            <strong>Zeus Systems Pvt. Ltd.</strong>
          </p>
          <p className="page-footer-text">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
