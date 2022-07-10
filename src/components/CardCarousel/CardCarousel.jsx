import React from "react";

function CardCarousel() {
  return (
    <div
      id="carouselExampleIndicators2"
      class="carousel slide"
      data-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide-to="1"
          aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="row container-fluid">
            <div className="col-md-4">
              <div className="simple-box">
                <div className="img-area">
                  <img
                    src="https://picsum.photos/id/237/300/200"
                    alt="random pic"
                    class="w-100"
                  />
                </div>
                <div className="img-text">
                  <h2>Product One</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, voluptatibus cumque! Impedit quo, quae
                    excepturi nam vel fuga earum et libero reprehenderit iusto
                    sed commodi, nihil quaerat? Expedita, corrupti laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-box">
                <div className="img-area">
                  <img
                    src="https://picsum.photos/id/237/300/200"
                    alt="random pic"
                    class="w-100"
                  />
                </div>
                <div className="img-text">
                  <h2>Product Two</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, voluptatibus cumque! Impedit quo, quae
                    excepturi nam vel fuga earum et libero reprehenderit iusto
                    sed commodi, nihil quaerat? Expedita, corrupti laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-box">
                <div className="img-area">
                  <img
                    src="https://picsum.photos/id/237/300/200"
                    alt="random pic"
                    class="w-100"
                  />
                </div>
                <div className="img-text">
                  <h2>Product Three</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, voluptatibus cumque! Impedit quo, quae
                    excepturi nam vel fuga earum et libero reprehenderit iusto
                    sed commodi, nihil quaerat? Expedita, corrupti laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="simple-box">
                <div className="img-area">
                  <img
                    src="https://picsum.photos/id/237/300/200"
                    alt="random pic"
                    class="w-100"
                  />
                </div>
                <div className="img-text">
                  <h2>Product Four</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, voluptatibus cumque! Impedit quo, quae
                    excepturi nam vel fuga earum et libero reprehenderit iusto
                    sed commodi, nihil quaerat? Expedita, corrupti laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-box">
                <div className="img-area">
                  <img
                    src="https://picsum.photos/id/237/300/200"
                    alt="random pic"
                    class="w-100"
                  />
                </div>
                <div className="img-text">
                  <h2>Product Five</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, voluptatibus cumque! Impedit quo, quae
                    excepturi nam vel fuga earum et libero reprehenderit iusto
                    sed commodi, nihil quaerat? Expedita, corrupti laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="simple-box">
                <div className="img-area">
                  <img
                    src="https://picsum.photos/id/237/300/200"
                    alt="random pic"
                    class="w-100"
                  />
                </div>
                <div className="img-text">
                  <h2>Product Six</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, voluptatibus cumque! Impedit quo, quae
                    excepturi nam vel fuga earum et libero reprehenderit iusto
                    sed commodi, nihil quaerat? Expedita, corrupti laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators2"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators2"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CardCarousel;
