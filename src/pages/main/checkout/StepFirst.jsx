import React from 'react'

function StepFirst() {
  return (
    <div className="flex flex-col w-[80%] m-auto px-[17%] py-8 gap-10 border border-red-500">
      {/* Stepper */}
      <div className="flex items-center justify-center h-20">
        <div className="flex items-center w-fit">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
              <span className="text-md text-white">1</span>
            </div>
            <span className="text-sm text-blue-700">Pengiriman</span>
          </div>
        </div>
          <div className="flex px-2 pb-6 w-[50%]">
            <div className="self-start border border-red-600 w-full"></div>
          </div>

        <div className="flex items-center w-fit">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
              <span className="text-md text-white">2</span>
            </div>
            <span className="text-sm text-gray-500">Pembayaran</span>
          </div>
        </div>
          <div className="flex px-2 pb-6 w-[50%]">
            <div className="self-start border border-red-600 w-full"></div>
          </div>

        <div className="flex items-center w-fit">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
              <span className="text-md text-white">3</span>
            </div>
            <span className="text-sm text-gray-500">Konfirmasi</span>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  )
}

export default StepFirst