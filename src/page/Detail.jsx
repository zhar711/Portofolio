import React from "react";
import "../styles/paralax.css";

const Detail = () => {
  return (
    <main className="main">
      <section className="section">
        <figure className="image-container">
          <img
            src="https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
        </figure>
        <article className="content">
          <h1 style={{ textAlign: "center", marginTop: "vw" }}>
            ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
          </h1>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            About me
          </h2>
          <div className="timeline-item">
            <span className="icon icon-info icon-lg">
              <i className="fab fa-react"></i>
            </span>
          </div>
          {/* Poto */}
          <div class="card">
            <div class="info">
              <h1 class="title">More Info</h1>
              <p class="description">
                Hello, My name is Ganjar Widatama, I'm a junior developer just
                learning to code in the middle of 2022, the motivation to learn
                coding is because coding is cool, it seems that not everyone can
                learn it. I'm very motivated to learn React & Next
              </p>
              <br />
              <p className="description2">
                I hope I can work in industry soon, and gain experience!
              </p>
            </div>
          </div>
          {/* tutup */}
        </article>
      </section>

      <section className="section">
        <figure className="image-container">
          <img
            src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </figure>
        <article className="content">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Work experience
          </h2>
          <div className="timeline-item">
            <span className="icon icon-info icon-lg">
              <i className="fab fa-react"></i>
            </span>
          </div>
          {/* Poto */}
          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">PT. Koperasi Karyawan</h2>
              </div>
              <p style={{ color: "gray", fontSize: "20px" }}>
                In : 1 March 2017 <br />
                Out : 31 October 2017
                <br />
                machine operator
              </p>
            </div>
          </div>

          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">PT. Sarana Mitra Luas</h2>
              </div>
              <p style={{ color: "gray", fontSize: "20px" }}>
                Masuk : 1 March 2018 <br />
                Keluar : 31 August 2021
                <br />
                Operator Forklift
              </p>
            </div>
          </div>

          {/* tutup */}
        </article>
      </section>

      {/* Poto */}

      {/* tutup */}

      <section className="section">
        <figure className="image-container">
          <img
            src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </figure>
        <article className="content">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Latest Project
          </h2>
          <div className="timeline-item">
            <span className="icon icon-info icon-lg">
              <i className="fab fa-react"></i>
            </span>
          </div>
          {/* Poto */}
          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">
                  <br />
                  <a
                    style={{ color: "gray" }}
                    href="https://github.com/zhar711"
                    target="/blank2"
                  >
                    Movie<span> </span>
                    <i className="fa fa-github"></i>
                  </a>
                </h2>
              </div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                Creating Movie DB using FAKE API in movide.db using React Js I
                styling and fetching API starting from GET,PUT,DELETE build a
                week starting on 27 august 2022
              </p>
            </div>
          </div>

          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">
                  <br />
                  <a
                    style={{ color: "gray" }}
                    href="https://github.com/evialf/Grup-Project3-Kelompok4"
                    target="/blank2"
                  >
                    e-Store<span> </span>
                    <i className="fa fa-github"></i>
                  </a>
                </h2>
              </div>
              <p style={{ color: "gray", fontSize: "20px" }}>
                Creating an E-store working with BE children using Next js, I
                styled and fetching the API in the Product Details section which
                contains 5 members of 3FE and 2BE, project creation June 2022
              </p>
            </div>
          </div>

          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">
                  <br />
                  <a
                    style={{ color: "gray", fontSize: "2vw" }}
                    href="https://github.com/ALTA-GP3-FE8-BE11"
                    target="/blank2"
                  >
                    e-Commerse<span> </span>
                    <i className="fa fa-github"></i>
                  </a>
                </h2>
              </div>
              <p style={{ color: "gray", fontSize: "15px" }}>
                Make E-Commerce work with BE using React JS which consists of
                3FE and 3BE
              </p>
            </div>
          </div>

          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">
                  <br />
                  <a
                    style={{ color: "gray" }}
                    href="https://github.com/zhar711"
                    target="/blank2"
                  >
                    ToDo List<span> </span>
                    <i className="fa fa-github"></i>
                  </a>
                </h2>
              </div>
              <p style={{ color: "gray", fontSize: "20px" }}>
                Create To Do List App using Fake API using Next js I'm styling
                and fetching API build a week starting from september 4, 2022
              </p>
            </div>
          </div>

          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">
                  <br />
                  <a
                    style={{ color: "gray", fontSize: "2vw" }}
                    href="https://github.com/zhar711"
                    target="/blank2"
                  >
                    News App<span> </span>
                    <i className="fa fa-github"></i>
                  </a>
                </h2>
              </div>
              <p style={{ color: "gray", fontSize: "20px" }}>
                create news web using newp api using Next Js im styling and
                fetching API build a week strating from august 2022
                <br />
              </p>
            </div>
          </div>

          <div class="container3">
            <div class="cards3">
              <div class="card3 card-one3">
                <h2 class="card-title3">
                  <br />
                  <a
                    style={{ color: "gray", fontSize: "1.3vw" }}
                    href="https://github.com/ALTA-GP-5"
                    target="/blank2"
                  >
                    Immersive Dashboard <span> </span>
                    <i className="fa fa-github"></i>
                  </a>
                </h2>
              </div>
              <p style={{ color: "gray", fontSize: "20px" }}>
                Create an Immersive Web Dashboard APP with my 3FE and 2BE
                styling and fetching API
              </p>
            </div>
          </div>

          {/* tutup */}
        </article>
      </section>
    </main>
  );
};

export default Detail;
