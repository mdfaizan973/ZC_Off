// import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://www.creative.onl/wp-content/uploads/2022/08/marketing-software-scaled-1.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Performance Marketing Platform!</h2>
          <p>
            For affiliates, advertisers and ad networks to help them track,
            optimize and measure the performance of their networks.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Plans & Pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
}
