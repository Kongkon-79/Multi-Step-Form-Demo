"use client"
import { FormData } from "@/types/FormDataType";
// components/steps/StepTwo.tsx
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface StepTwoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const StepTwo: React.FC<StepTwoProps> = ({ register, errors }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Image
      </label>
      <input
        type="file"
        {...register("image", {
          required: "Animal image is required",
          validate: (files) => files?.length > 0 || "Image file is required",
        })}
        className="input input-bordered w-full pt-1"
        accept="image/*"
      />
      {errors.image && (
        <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
      )}
    </div>
  );
};

export default StepTwo;
