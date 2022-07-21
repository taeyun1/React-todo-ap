import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-2">
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded-md shadow"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />
      <input
        className="p-2 text-blue-400 border-2 border-blue-200 rounded-md hover:text-white hover:bg-blue-200 cursor-pointer"
        type="submit"
        value="입력"
      />
    </form>
  );
}
