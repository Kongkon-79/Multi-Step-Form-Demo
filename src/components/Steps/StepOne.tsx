"use client"
import { FormData } from "@/types/FormDataType";
// components/steps/StepOne.tsx
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface StepOneProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const StepOne: React.FC<StepOneProps> = ({ register, errors }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Animal Name
      </label>
      <input
        type="text"
        {...register("name", { required: "Animal name is required" })}
        className="input input-bordered w-full"
        placeholder="Enter animal name"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
      )}
    </div>
  );
};

export default StepOne;
