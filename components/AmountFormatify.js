import { useState } from 'react'
import { ethers } from "ethers"
import Swal from 'sweetalert2'

export default function AmountFormatify(){
  const [weiAmount,setWeiAmount] = useState('')
  const [etherAmount,setEtherAmount] = useState('')
  const [switchUp,setSwitchUp] = useState(true)

  const [amount,setAmount] = useState('')
  const [result,setResult] = useState('')

  function handleAmountChange(e) {
    let value = e.target.value

    if(isNaN(parseFloat(value)) || value[0] == '0'){
      setAmount('')
    }else{
      setAmount(parseFloat(value))

      try{
        setResult(ethers.utils.commify(parseFloat(value)))
      }catch(e){
        setResult('Out of Bound')
      }
    }
  }

  function handleClipboard(){
    navigator.clipboard.writeText(result.toString())

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

  async function handlePaste(){
    let value = await navigator.clipboard.readText()


    if(isNaN(parseFloat(value)) || value[0] == '0'){
      setAmount('')

      Swal.fire({
        title: "Failed",
        text: `Pasting value is not a number,please copy numbers`,
        icon: "error",
        position: 'bottom-start',
        timer: 4000,
        grow: 'row',
        showConfirmButton: false,
        timerProgressBar: true,
      });

    }else{
      setAmount(parseFloat(value))

      try{
        setResult(ethers.utils.commify(parseFloat(value)))
      }catch(e){
        setResult('Out of Bound')
      }
    }
  }

  return (
    <>
      <div className="mockup-phone">
        <div className="camera"></div> 
        <div className="display">
          <div className="p-5 artboard artboard-demo phone-1">

            <h1 className="mb-5 text-xl">Formatify</h1>

            <div className="form-control">
              <label className="input-group">
                <button onClick={handlePaste} className="border cursor-pointer btn">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path fill="currentColor" d="M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"></path><path fill="currentColor" d="m21.29 16.29l-2.58-2.58a.996.996 0 1 0-1.41 1.41l.87.88H13c-.55 0-1 .45-1 1s.45 1 1 1h5.17l-.87.88a.996.996 0 1 0 1.41 1.41l2.58-2.58c.39-.4.39-1.03 0-1.42z"></path></svg>
                </button>
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder={''}
                  className="appearance-none focus:outline-none input input-bordered"
                />
                <button onClick={handleClipboard} className="border cursor-pointer btn">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path fill="currentColor" d="M5.754 22.005a2.25 2.25 0 0 1-2.25-2.25L3.502 5.75a2.25 2.25 0 0 1 2.25-2.25l.747-.001l.001-.749a.75.75 0 0 1 .648-.743L7.25 2a.75.75 0 0 1 .743.648L8 2.75v.749h3V2.75a.75.75 0 0 1 .65-.743l.1-.007a.75.75 0 0 1 .744.648l.007.102v.749h2.997l.001-.749a.75.75 0 0 1 .648-.743L16.25 2a.75.75 0 0 1 .743.648L17 2.75v.749h.749a2.25 2.25 0 0 1 2.25 2.25l.001 11c0 .06-.007.12-.02.176l-.03.094l-.045.096l-.02.032a.685.685 0 0 1-.105.133l-4.504 4.505a.74.74 0 0 1-.085.073l.085-.073a.744.744 0 0 1-.105.087l-.088.052l-.116.047l-.114.026l-.053.006l-.055.002H5.754ZM17.748 5H5.742a.75.75 0 0 0-.74.75l.002 14.004c0 .415.336.75.75.75h8.24l.001-2.254a2.25 2.25 0 0 1 2.096-2.245l.154-.005H18.5V5.75a.75.75 0 0 0-.75-.75Zm-.31 12.5h-1.193a.75.75 0 0 0-.743.648l-.007.102v1.194l1.943-1.944ZM7.25 16h3.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 16h3.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 12h8.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 8h8.998H7.25Z"></path></svg>
                </button>
              </label>
            </div>

            <div className="mt-10 form-control">
              <label className="label">
                <span className="label-text">Formatted Result</span>
              </label>
              <label className="input-group">
                <input 
                  type="text"
                  value={result}
                  disabled
                  placeholder={''}
                  className="appearance-none focus:outline-none input input-bordered"
                />
                <button onClick={handleClipboard} className="border cursor-pointer btn">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path fill="currentColor" d="M5.754 22.005a2.25 2.25 0 0 1-2.25-2.25L3.502 5.75a2.25 2.25 0 0 1 2.25-2.25l.747-.001l.001-.749a.75.75 0 0 1 .648-.743L7.25 2a.75.75 0 0 1 .743.648L8 2.75v.749h3V2.75a.75.75 0 0 1 .65-.743l.1-.007a.75.75 0 0 1 .744.648l.007.102v.749h2.997l.001-.749a.75.75 0 0 1 .648-.743L16.25 2a.75.75 0 0 1 .743.648L17 2.75v.749h.749a2.25 2.25 0 0 1 2.25 2.25l.001 11c0 .06-.007.12-.02.176l-.03.094l-.045.096l-.02.032a.685.685 0 0 1-.105.133l-4.504 4.505a.74.74 0 0 1-.085.073l.085-.073a.744.744 0 0 1-.105.087l-.088.052l-.116.047l-.114.026l-.053.006l-.055.002H5.754ZM17.748 5H5.742a.75.75 0 0 0-.74.75l.002 14.004c0 .415.336.75.75.75h8.24l.001-2.254a2.25 2.25 0 0 1 2.096-2.245l.154-.005H18.5V5.75a.75.75 0 0 0-.75-.75Zm-.31 12.5h-1.193a.75.75 0 0 0-.743.648l-.007.102v1.194l1.943-1.944ZM7.25 16h3.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 16h3.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 12h8.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 8h8.998H7.25Z"></path></svg>
                </button>
              </label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
