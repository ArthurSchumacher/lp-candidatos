import React from "react";

function Biography() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-16">
        <div className="lg:w-1/2 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-6xl text-5xl mb-4 text-gray-300 uppercase leading-relaxed tracking-widest font-light">
            Biografia
          </h1>
          <h2 className="title-font sm:text-2xl text-xl font-bold text-blue uppercase antialiased tracking-wider">
            Herculano Borges
          </h2>
          <span className="h-1 w-full bg-emerald-500 max-w-xs my-4" />
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptatem voluptatibus praesentium numquam assumenda dignissimos
            nesciunt doloribus cumque quaerat id optio sit, iste eos a fugit
            animi ab harum maxime delectus dicta perferendis? Ab maxime quod, et
            vitae reprehenderit itaque ullam omnis beatae voluptatibus. Quo quos
            iusto itaque suscipit dicta debitis placeat doloribus odio, voluptas
            animi incidunt repellendus ducimus officia.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Biografia completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Biography;
