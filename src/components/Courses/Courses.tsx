import Course from "../Course/Course.tsx";

const Courses = () => {
  return (
      <div className="grid grid-cols-3 gap-3.5 my-5">
        <Course sphere={"Development"} name={"Course by React"} author={"Martin"} isPaid={true} price={350}/>
      </div>
  );
};

export default Courses;