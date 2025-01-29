// pages/MultiStepForm.tsx
"use client";
import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { imageUpload } from "@/utils/ImageUpload";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { FormData } from "@/types/FormDataType";
import { useRouter } from "next/navigation";

const steps = ["Basic Info", "Upload Image", "Select Category"];

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(0); // Track the current step
  const [formData, setFormData] = useState<Partial<FormData>>({}); // Store form data across steps
  const router = useRouter();

  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      image: undefined,
      category: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = methods;

  const nextStep = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data }); // Save current step data
    setStep((prev) => prev + 1); // Go to next step
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const imageURL = await imageUpload(data.image[0]); // Upload image
    const finalData = { ...formData, ...data, image: imageURL };
    console.log("Final Data: ", finalData);
    alert("Animal Created Successfully!");
    router.push('/')

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">{steps[step]}</h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(step === steps.length - 1 ? onSubmit : nextStep)}
          >
            {step === 0 && <StepOne register={register} errors={errors} />}
            {step === 1 && <StepTwo register={register} errors={errors} />}
            {step === 2 && <StepThree register={register} errors={errors} />}
            <div className="flex justify-between mt-6">
              {step > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-secondary"
                >
                  BackMultiStepForm
                </button>
              )}
              <button
                type="submit"
                disabled={!isValid}
                className={`btn btn-primary ${
                  !isValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {step === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default MultiStepForm;
