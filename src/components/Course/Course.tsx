import {ICourse} from "../../types/course.types.ts";

const Course = ({sphere, name, author, isPaid, price}: ICourse) => {
  return (
    <div className="bg-gray-800 rounded-xl text-white p-6">
      <h1>{sphere}</h1>
      <h4>{name}</h4>
      <p>{author}</p>
      <button>
        {isPaid ? `Buy for ${price}$` : "Get the course for free"}
      </button>
    </div>
  );
};

export default Course;