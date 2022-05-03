import { useState } from 'react'
import { ethers } from "ethers"
import Swal from 'sweetalert2'

export default function GweiEtherCalculator(){
  const [gweiAmount,setGweiAmount] = useState('')
  const [etherAmount,setEtherAmount] = useState('')
  const [switchUp,setSwitchUp] = useState(true)

  function handleEtherChange(e) {
    let value = e.target.value

    if(value === '' || isNaN(parseFloat(value))){
      setGweiAmount('')
    }else{
      let amountBN = ethers.utils.parseUnits(value,"gwei")
      setGweiAmount(amountBN.toString())
    }

    if(isNaN(parseFloat(value)) || value[0] == '0'){
      setEtherAmount('')
    }else{
      setEtherAmount(parseFloat(value))
    }
  }

  function handleGweiChange(e) {
    let value = e.target.value

    if(value === '' || isNaN(parseFloat(value))){
      setEtherAmount('')
    }else{
      let amountBN = ethers.utils.formatUnits(value,"ether")
      setEtherAmount(amountBN)
    }

    if(isNaN(parseFloat(value)) || value[0] == '0'){
      setWeiAmount('')
    }else{
      setWeiAmount(parseFloat(value))
    }
  }

  function handleSwitch() {
    setSwitchUp(!switchUp)
  }

  return (
    <>
      <div className="mockup-phone">
        <div className="camera"></div> 
        <div className="display">
          <div className="p-5 artboard artboard-demo phone-1">

            <h1 className="mb-5 text-xl">
              <span>Ether</span>
              <svg className="inline-block w-5 h-5 mx-1" viewBox="0 0 1024 1024"><path fill="currentColor" d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
              <span>Gwei</span>
            </h1>

            { switchUp ? (
              <>
                <Input title="Ether Amount" placeholder="Ether" amount={etherAmount} handleChange={handleEtherChange} isDisabled={false} />
                <svg onClick={handleSwitch} className="p-2 my-5 border rounded-full cursor-pointer transition-all hover:scale-150 w-11 h-11" viewBox="0 0 24 24"><path fill="#888888" d="m18 4l-4 4h3v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a4 4 0 0 0-4-4a4 4 0 0 0-4 4v8H2l4 4l4-4H7V8a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8a4 4 0 0 0 4 4a4 4 0 0 0 4-4V8h3l-4-4Z"></path></svg>
                <Input title="Gwei Amount" placeholder="Gwei" amount={gweiAmount} handleChange={handleGweiChange} isDisabled={true} />
              </>
            ) : (
              <>
                <Input title="Gwei Amount" placeholder="Gwei" amount={gweiAmount} handleChange={handleGweiChange} isDisabled={false} />
                <svg onClick={handleSwitch} className="p-2 my-5 border rounded-full cursor-pointer transition-all hover:scale-150 w-11 h-11" viewBox="0 0 24 24"><path fill="#888888" d="m18 4l-4 4h3v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a4 4 0 0 0-4-4a4 4 0 0 0-4 4v8H2l4 4l4-4H7V8a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8a4 4 0 0 0 4 4a4 4 0 0 0 4-4V8h3l-4-4Z"></path></svg>
                <Input title="Ether Amount" placeholder="Ether" amount={etherAmount} handleChange={handleEtherChange} isDisabled={true} />
              </>
            ) }

          </div>
        </div>
      </div>
    </>
  )
}

function Input({ title,placeholder,amount,handleChange,isDisabled }) {

  function handleClipboard(){
    navigator.clipboard.writeText(amount.toString())

    Swal.fire({
      title: "Success",
      text: `Successfully copied amount to clipboard`,
      icon: "success",
      position: 'bottom-start',
      timer: 4000,
      grow: 'row',
      showConfirmButton: false,
      timerProgressBar: true,
    });
  }

  return(
    <div className="form-control">
      <label className="label">
        <span className="label-text">{title}</span>
      </label>
      <label className="input-group">
        <input 
          type="number"
          value={amount}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isDisabled ? 'true' : undefined}
          className="appearance-none focus:outline-none input input-bordered"
        />
        <button onClick={handleClipboard} className="border cursor-pointer btn">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path fill="currentColor" d="M5.754 22.005a2.25 2.25 0 0 1-2.25-2.25L3.502 5.75a2.25 2.25 0 0 1 2.25-2.25l.747-.001l.001-.749a.75.75 0 0 1 .648-.743L7.25 2a.75.75 0 0 1 .743.648L8 2.75v.749h3V2.75a.75.75 0 0 1 .65-.743l.1-.007a.75.75 0 0 1 .744.648l.007.102v.749h2.997l.001-.749a.75.75 0 0 1 .648-.743L16.25 2a.75.75 0 0 1 .743.648L17 2.75v.749h.749a2.25 2.25 0 0 1 2.25 2.25l.001 11c0 .06-.007.12-.02.176l-.03.094l-.045.096l-.02.032a.685.685 0 0 1-.105.133l-4.504 4.505a.74.74 0 0 1-.085.073l.085-.073a.744.744 0 0 1-.105.087l-.088.052l-.116.047l-.114.026l-.053.006l-.055.002H5.754ZM17.748 5H5.742a.75.75 0 0 0-.74.75l.002 14.004c0 .415.336.75.75.75h8.24l.001-2.254a2.25 2.25 0 0 1 2.096-2.245l.154-.005H18.5V5.75a.75.75 0 0 0-.75-.75Zm-.31 12.5h-1.193a.75.75 0 0 0-.743.648l-.007.102v1.194l1.943-1.944ZM7.25 16h3.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 16h3.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 12h8.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 8h8.998H7.25Z"></path></svg>
        </button>
      </label>
    </div>
  )

}
