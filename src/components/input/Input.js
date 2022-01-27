import { useRef } from "react";

function Input(props) {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.setInput(inputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className="w-11/12 max-w-[24rem] mx-auto mt-8 h-8 rounded-md overflow-hidden sm:mt-16">
      <input
        className="h-full w-full pl-4"
        ref={inputRef}
        placeholder="enter a country, city"
      />
      <button className="h-full bg-slate-200 px-2 -ml-8">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default Input;
