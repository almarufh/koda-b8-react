export default function Login () {
  return (
    <main className="grid grid-cols-2 border w-full h-screen">
      <aside className="border w-full h-screen">
        <div className=""></div>
      </aside>
      <aside className="border border-[red] w-full h-screen p-20">
        <div className="flex flex-col border gap-7">
          <div className="flex flex-col gap-1">
            <span className="text-1.5rem font-bold">Masuk ke AKun</span>
            <span className="text-1rem text-[#6B7280]">Belum punya akun? <a className="text-[#1A73E8]" href="/login">Daftar gratis</a></span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[#6B7280]">
            <span className="border border-[#0000001A] flex justify-center items-center p-[12px_0px] rounded-lg">Google</span>
            <span className="border border-[#0000001A] flex justify-center items-center p-[12px_0px] rounded-lg">Facebook</span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center w-full">
            <div className="border-t border-[#0000001A] w-full"></div>
            <span className="text-[12px] text-[#6B7280] whitespace-nowrap">atau masuk dengan email</span>
            <div className="border-t border-[#0000001A] w-full"></div>
          </div>
        </div>
      </aside>
    </main>
  )
}