"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

/**
 * Import components
 */
import InputWithIcon from "@/components/atoms/InputWithIcon";
import useQueryParams from "@/hooks/useQueryParams";

const mockDataSlide = [
  {
    imgWidth: 183.35,
    imgHeight: 290.19,
    imgSrc: "/assets/svg/set_profile_1.svg",
    title: "Improve Shape",
    description:
      "I have a low amount of body fat and need / want to build more muscle ",
  },
  {
    imgWidth: 205.88,
    imgHeight: 294.23,
    imgSrc: "/assets/svg/set_profile_2.svg",
    title: "Lean & Tone",
    description:
      "I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way",
  },
  {
    imgWidth: 229.18,
    imgHeight: 264.25,
    imgSrc: "/assets/svg/set_profile_3.svg",
    title: "Lose a Fat",
    description:
      "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass ",
  },
];

type SliderCardProps = {
  imgWidth: number;
  imgHeight: number;
  imgSrc: string | null;
  title: string;
  description: string;
};

type InitialSetupStepProps = {
  setCurrentStep: void;
  setQueryParam: void;
};

const SetUpSliderCard = ({ params }: SliderCardProps) => {
  const { imgWidth, imgHeight, imgSrc, title, description } = params;
  return (
    <div className="container">
      <div className="image flex justify-center">
        <Image src={imgSrc} alt={imgSrc} width={imgWidth} height={imgHeight} />
      </div>
      <div className="content text-center">
        <div className="title">
          <p className="text-medium-semi-bold mt-5 w-[50%] mx-auto">{title}</p>
          <hr className=" w-[50px] m-auto mt-1" />
        </div>
        <div className="description text-small-regular m-auto w-[215px] mt-5">
          {description}
        </div>
      </div>
    </div>
  );
};

const InitialSetupStep = ({
  setCurrentStep,
  setQueryParam,
}: InitialSetupStepProps) => {
  return (
    <div className="container">
      <div className="imgTopic h-[350px]">
        <Image
          src="/assets/svg/set_profile_init.svg"
          alt="init_step"
          width={0}
          height={0}
          style={{ width: "100%", height: "inherit" }} // optional
        />
      </div>
      <div className="preDescription text-center mt-7">
        <h4 className="title title-h4-bold">Let’s complete your profile</h4>
        <p className="message text-small-regular mt-[5px] w-[80%] mx-auto">
          It will help us to know more about you!
        </p>
      </div>
      <div className="infoForm grid justify-center mt-7">
        <InputWithIcon id="" name="" type="" placeholder="Choose Gender" />
        <InputWithIcon id="" name="" type="" placeholder="Choose Gender" />
      </div>
      <button
        type="button"
        className="text-subtitle-semi-bold absolute bottom-[50px] w-4/5 left-0 right-0 mx-auto bg-blue-linear rounded-full py-5"
        onClick={() => {
          setCurrentStep(2);
          setQueryParam("step", 2);
        }}
      >
        Next
      </button>
    </div>
  );
};

const TheSecondSetupStep = ({
  setCurrentStep,
  setQueryParam,
}: InitialSetupStepProps) => {
  return (
    <div className="container">
      <div className="header-text mt-[90px] text-center shadow-lg">
        <h4 className="upper-text title-h4-bold">What is your goal ?</h4>
        <p className="text-small-regular mt-[5px] w-[50%] mx-auto">
          It will help us to choose a best program for you
        </p>
      </div>
      <div className="slide-goal mt-14">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="swiper"
        >
          {mockDataSlide.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SetUpSliderCard params={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <button
        type="button"
        className="text-subtitle-semi-bold absolute bottom-[50px] w-4/5 left-0 right-0 mx-auto bg-blue-linear rounded-full py-5"
        onClick={() => {
          setCurrentStep(1);
          setQueryParam("step", 1);
        }}
      >
        Confirm
      </button>
      <div className="button-confirm"></div>
    </div>
  );
};

const SetUpProfilePage = () => {
  const { getQueryParam, setQueryParam } = useQueryParams();
  const [currentStep, setCurrentStep] = useState(getQueryParam("step") || 1);

  switch (currentStep) {
    case 1:
      return (
        <InitialSetupStep
          setCurrentStep={setCurrentStep}
          setQueryParam={setQueryParam}
        />
      );
    case 2:
      return (
        <TheSecondSetupStep
          setCurrentStep={setCurrentStep}
          setQueryParam={setQueryParam}
        />
      );
    default:
      return (
        <InitialSetupStep
          setCurrentStep={setCurrentStep}
          setQueryParam={setQueryParam}
        />
      );
  }
};

export default SetUpProfilePage;
