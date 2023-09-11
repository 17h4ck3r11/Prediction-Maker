'use client'
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [inputVal, setinputVal] = useState("")
  const {push} = useRouter()
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault() //Don't Refresh
    push(`/prediction/${inputVal}`)
  }
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="text-2xl font-bold mb-5">
          <h1>Prediction Maker</h1>
        </div>
        <div className="my-5">
        <p>By taking name as an input, this app try to predict following information associated with the name:</p>
          <ul className="pl-5">
            <li className="list-disc">Age</li>
            <li className="list-disc">Gender</li>
            <li className="list-disc">Country Code</li>
          </ul>
        </div>
        <div className="mb-4">
          <input 
            className="
              shadow 
              appearance-none
              border 
              rounded 
              w-full 
              py-2 
              px-3 
              text-gray-700 
              leading-tight 
              focus:outline-none 
              focus:shadow-outline
            " 
            id="name" 
            value={inputVal}
            type="text" 
            placeholder="Enter your name"
            onChange={(e) => {
              setinputVal(e.target.value)
            }} 
          />
        </div>
        <div className="flex items-center">
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
            " 
            type="submit">
            Make Prediction!
          </button>
        </div>
      </form>
    </div>
  )
}
