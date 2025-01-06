import React from 'react'

const Main = ({setCurrentPage,Create}) => {
  return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
        <h1 className="text-4xl font-bold mb-8">Create ETH wallet</h1>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button onClick={Create} className="h-12 rounded-md text-lg font-semibold bg-white text-black hover:bg-gray-200">
            Create
          </button>

          <button onClick={()=>setCurrentPage("wallet")} className="h-12 rounded-md text-lg font-semibold border-white text-black bg-white hover:bg-gray-200">
            Recovery
          </button>
        </div>
      </div> 
  )
}

export default Main
