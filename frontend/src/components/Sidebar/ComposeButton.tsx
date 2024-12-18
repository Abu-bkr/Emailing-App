import pencilIcon from '../../assets/pencil-icon.svg'

const ComposeButton = () => {
  return (
    <div>
      <button className="bg-[#C2E7FF] flex justify-center items-center text-[#274966] w-[142px] h-[46px] rounded-2xl m-4 hover:bg-blue-400 hover:shadow-2xl transition-colors duration-300 ">
      <img src={pencilIcon}  alt="Compose" className="w-5 h-5 mr-2 " />
      Compose
      </button>
    </div>
  )
}

export default ComposeButton
