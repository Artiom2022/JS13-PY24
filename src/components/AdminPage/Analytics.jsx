import { TextFields } from "@mui/icons-material";
import React, { useState } from "react";
import style from "./style.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Analytics = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const bacspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div>
      <section id="sidebar">
        <a href="#" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">Ur Office</span>
        </a>
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
              <h1>Analytics</h1>
              <ul class="breadcrumb">
                <li>
                  <Link to="/AdminPage" href="#" class="active">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <Link to="/Analytics">Analytics</Link>
                </li>
              </ul>
            </div>
            <a href="#" class="btn-download">
              <i class="bx bxs-cloud-download"></i>
            </a>
          </div>

          <ul class="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group"></i>
              <span class="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-dollar-circle"></i>
              <span class="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Recent Orders</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
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
                <h3>Calculator</h3>
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
                  <div className="contaner">
                    <form>
                      <input type="text" className="inpCaalc" value={result} />
                    </form>
                    <div className="keypad">
                      <button
                        onClick={handleClick}
                        id={clear}
                        className="clear"
                      >
                        CE
                      </button>
                      <button
                        onClick={handleClick}
                        id={bacspace}
                        className="bacspace"
                      >
                        C
                      </button>
                      <button
                        name="/"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        &divide;
                      </button>
                      <button
                        name="7"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        7
                      </button>
                      <button
                        name="8"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        8
                      </button>
                      <button
                        name="9"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        9
                      </button>
                      <button
                        name="*"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        &times;
                      </button>
                      <button
                        name="4"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        4
                      </button>
                      <button
                        name="5"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        5
                      </button>
                      <button
                        name="6"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        6
                      </button>
                      <button
                        name="-"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        &ndash;
                      </button>
                      <button
                        name="1"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        1
                      </button>
                      <button
                        name="2"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        2
                      </button>
                      <button
                        name="3"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        3
                      </button>
                      <button
                        name="+"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        +
                      </button>
                      <button
                        name="0"
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        0
                      </button>
                      <button
                        name="."
                        onClick={handleClick}
                        className="btnClccc"
                      >
                        .
                      </button>
                      <button onClick={calculate} className="result">
                        =
                      </button>
                    </div>
                  </div>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      "& > :not(style)": { m: 1, width: "65ch" },
                    }}
                  ></Stack>
                </Box>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Analytics;
