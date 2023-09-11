import React from "react";

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function prediction({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="flex flex-col justify-center items-center shadow-md">
      <div className="bg-white px-10 py-5 rounded">
        <div className="text-2xl font-bold text-center mb-5">
          Personal Information
        </div>
        <div className="font-medium text-lg ">Age: {age?.age}</div>
        <div className="font-medium text-lg ">Gender: {gender?.gender}</div>
        <div className="font-medium text-lg ">
          Country Code: {country?.country[0]?.country_id}
        </div>
        <a href="../../">
          <button
            className="
              bg-blue-500 
              hover:bg-blue-700
              text-white 
              font-bold
              py-2 
              px-4 
              rounded 
              focus:outline-none 
              focus:shadow-outline
              mt-5
            "
          >
            Search Again!
          </button>
        </a>
      </div>
    </div>
  );
}

// we use '?' when we don't have idea about the return type
