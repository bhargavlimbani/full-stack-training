import { useState } from "react";
import './styles.css'

const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://www.course-api.com/images/people/person-1.jpeg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://www.course-api.com/images/people/person-2.jpeg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://www.course-api.com/images/people/person-4.jpeg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "https://www.course-api.com/images/people/person-3.jpeg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

function Review() {
  const [currentItem, setCurrentItem] = useState(0);

  const review = reviews[currentItem]

  // logic for next button : 
  const nextReview = () =>{
    if(currentItem == reviews.length - 1){
        setCurrentItem(0);
    }
    else{
      setCurrentItem(currentItem + 1);
    }
  }

  // logic for prev button : 
  const prevReview = () =>{
    if(currentItem == 0){
      setCurrentItem(reviews.length - 1);
    }
    else{
      setCurrentItem(currentItem-1);
    }
  }

  // logic for random item : 
  const randomReview = () =>{
    const randomNumber = Math.floor(Math.random() * reviews.length);
    setCurrentItem(randomNumber);
  }

  
  return <>
  <main>
      <section className="container">
        {/* <!-- title --> */}
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* <!-- review --> */}
        <article className="review">
          <div className="img-container">
            <img src={review.img} id="person-img" alt="" />
          </div>
          <h4 id="author">{review.name}</h4>
          <p id="job">{review.job}</p>
          <p id="info">
            {review.text}
          </p>
          {/* <!-- prev next buttons--> */}
          <div className="button-container">
            <button className="prev-btn" onClick={prevReview}>
              <i className="fas fa-chevron-left"></i>Prev
            </button>
            <button className="next-btn" onClick={nextReview}>
              <i className="fas fa-chevron-right" ></i>Next
            </button>
          </div>
          {/* <!-- random button --> */}
          <button className="random-btn" onClick={randomReview}>surprise me</button>
        </article>
      </section>
    </main>
  </>;
}

export default Review;
