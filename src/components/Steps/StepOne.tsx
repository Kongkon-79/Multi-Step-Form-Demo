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
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                </label>
                <input
                    type="text"
                    {...register("firstName", { required: "Animal name is required" })}
                    className="input input-bordered w-full"
                    placeholder="Enter animal name"
                />
                {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                </label>
                <input
                    type="text"
                    {...register("lastName", { required: "Animal name is required" })}
                    className="input input-bordered w-full"
                    placeholder="Enter animal name"
                />
                {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
            </div>
        </div>
    );
};

export default StepOne;
