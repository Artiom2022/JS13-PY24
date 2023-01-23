import { TextFields } from "@mui/icons-material";
import React from "react";
import style from "./style.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <section id="sidebar">
        <a href="#" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">Ur Office</span>
        </a>
        {/* <ul class="side-menu top">
          <li class="active">
            <a href="#">
              <i class="bx bxs-dashboard"></i>
              <span class="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-message-dots"></i>
              <span class="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-group"></i>
              <span class="text">Team</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#">
              <i class="bx bxs-cog"></i>
              <span class="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class="bx bxs-log-out-circle"></i>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul> */}
      </section>

      <section id="content">
        <nav>
          <i class="bx bx-menu"></i>
          <a href="#" class="nav-link">
            Categories
          </a>
          <form action="#">
            <div class="form-input">
              <input type="text" placeholder="Search..."></input>
              <button type="submit" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden></input>
          <label for="switch-mode" class="switch-mode"></label>
          <a href="#" class="notification">
            <i class="bx bxs-bell"></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src="imCg/people.png" />
          </a>
        </nav>

        <main>
          <div class="head-title">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <Link to="/Analytics" class="active">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <a href="#" class="btn-download">
              <i class="bx bxs-cloud-download"></i>
            </a>
          </div>

          <ul class="box-info">
            <li>
              <i class="bx bxs-calendar-check">
                <img
                  src="https://avatars.mds.yandex.net/i?id=9c5ce97e1da40487f5832df3ea81a3fc-4774747-images-thumbs&n=13"
                  alt=""
                  className="imgCoupon"
                />
              </i>
              <span class="text">
                <Button color="warning" variant="outlined">
                  Create a Coupon
                </Button>
              </span>
            </li>
            <li>
              <i class="bx bxs-group">
                <img
                  src="https://avatars.mds.yandex.net/i?id=edf8053ed0c4b8840fb1e6482e244811d9be3653-6321690-images-thumbs&n=13"
                  alt=""
                  className="imgCoupon"
                />
              </i>
              <span class="text">
                <Button color="warning" variant="outlined">
                  Create Discounts
                </Button>
              </span>
            </li>
            <li>
              <i class="bx bxs-dollar-circle">
                <img
                  src="https://avatars.mds.yandex.net/i?id=de0040becd96e8ac3390c06e5b82ee48-4079989-images-thumbs&n=13"
                  alt=""
                  className="imgCoupon"
                />
              </i>
              <span class="text">
                <Button color="warning" variant="outlined">
                  Stop the Site
                </Button>
              </span>
            </li>
          </ul>

          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Recently Added</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Date Added</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <hr />
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
            <div class="todo">
              <div class="head">
                <h3>Add Product</h3>
                <i class="bx bx-plus"></i>
                <i class="bx bx-filter"></i>
              </div>
              <ul class="todo-list">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "45ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Title"
                    color="warning"
                    focused
                    placeholder="Title"
                  />
                  <TextField
                    label="Price"
                    color="warning"
                    focused
                    placeholder="Price"
                  />
                  <TextField
                    label="Description"
                    color="warning"
                    focused
                    placeholder="Description"
                  />
                  <TextField
                    label="Image"
                    color="warning"
                    focused
                    placeholder="Image"
                  />
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      "& > :not(style)": { m: 1, width: "65ch" },
                    }}
                  >
                    <Button color="warning" variant="outlined">
                      Add, Bruh )
                    </Button>
                  </Stack>
                </Box>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default AdminPage;
