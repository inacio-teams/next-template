export default function Loading() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-light-3 transition-all duration-500 dark:bg-slate-dark-1">
      <svg
        className="h-20 w-20 fill-slate-dark-1 transition-all duration-500 dark:fill-slate-light-1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`.spinner_P7sC{transform-origin:center;animation:spinner_svv2 .75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}`}
        </style>
        <path
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          className="spinner_P7sC"
        />
      </svg>
    </main>
  )
}