import reviews from "./data";
import "./review.css";
function Review() {

    const data = reviews;
    console.log(data)
  return (
    <>
      <main>
        <section className="container">
          {/* <!-- title --> */}
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          {/* <!-- review --> */}
          <article className="review">
            {reviews.map((reviews) => {
              return (
                <>
                  <div className="img-container">
                    {/* <img src={reviews[0].img} id="person-img" alt="" /> */}
                  </div>
                  <h4 id="author">{reviews.name}</h4>
                  <p id="job">{reviews.job}</p>
                  <p id="info">
                    {reviews.text}
                  </p>
                </>
              );
            })}

            {/* <div className="img-container">
              <img src="person-1.jpeg" id="person-img" alt="" />
            </div>
            <h4 id="author">sara jones</h4>
            <p id="job">ux designer</p>
            <p id="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              asperiores debitis incidunt, eius earum ipsam cupiditate libero?
              Iste, doloremque nihil?
            </p> */}
            {/* <!-- prev next buttons--> */}
            <div className="button-container">
              <button className="prev-btn">prev</button>
              <button className="next-btn">next</button>
            </div>
            {/* <!-- random button --> */}
            <button className="random-btn">surprise me</button>
          </article>
        </section>
      </main>
    </>
  );
}

export default Review;
