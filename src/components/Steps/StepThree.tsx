"use client"
import { FormData } from "@/types/FormDataType";
// components/steps/StepThree.tsx
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface StepThreeProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const StepThree: React.FC<StepThreeProps> = ({ register, errors }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Category
      </label>
      <select
        {...register("category", { required: "Category is required" })}
        className="input input-bordered w-full"
      >
        <option value="">Select a category</option>
        <option value="Land Animal">Land Animal</option>
        <option value="Bird">Bird</option>
        <option value="Fish">Fish</option>
        <option value="Insect">Insect</option>
      </select>
      {errors.category && (
        <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
      )}
    </div>
  );
};

export default StepThree;
