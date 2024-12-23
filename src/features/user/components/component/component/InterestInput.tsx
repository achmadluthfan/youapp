"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function InterestInput() {
  const [tags, setTags] = useState<string[]>([]); // State untuk menyimpan tag
  const [inputValue, setInputValue] = useState<string>(""); // State untuk input saat ini

  // Handle penekanan tombol Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue(""); // Reset input
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="">
      <button className="absolute top-12 right-4 text-white">Save</button>
      <div className=" relative min-h-5">
        <Input
          className="bg-white  bg-opacity-[0.07] border-none text-white"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {tags.map((tag, index) => (
          <div
            key={index}
            className="inline-flex bg-white opacity-20 flex-wrap"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="ml-2 text-red-500 hover:text-red-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
