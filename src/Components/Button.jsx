

const Button = ({label, iconURL}) => {
  return (
   <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none text-white bg-coral-red border border-coral-red rounded-full">
    {label}
    <img src={iconURL} alt="arrow right icon"
    className="ml-2 rounded-full w-5 h-5 group-hover:bg-gray-500" />
   </button>
  )
}

export default Button