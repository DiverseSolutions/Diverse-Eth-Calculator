import { useState } from 'react'
import { ethers } from "ethers"

export default function WeiEtherCalculator(){
  const [weiAmount,setWeiAmount] = useState(0)
  const [etherAmount,setEtherAmount] = useState(0)

  return (
    <>
      <div className="mockup-phone">
        <div className="camera"></div> 
        <div className="display">
          <div className="p-5 artboard artboard-demo phone-1">

            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Ether Amount</span>
              </label>
              <input type="text" 
                placeholder="Ether" 
                value={etherAmount}
                onChange={(e) => { 
                  if(e.target.value != ''){
                    let _amount = parseFloat(e.target.value)
                    let amountBN = ethers.utils.parseUnits(_amount.toString(),18)

                    if(e.target.value[e.target.value.length - 1] == '.'){
                      setEtherAmount(e.target.value)
                      setWeiAmount(amountBN.toString())
                    }else{
                      setEtherAmount(_amount)
                      setWeiAmount(amountBN.toString())
                    }
                  }else{
                    setEtherAmount(0)
                    setWeiAmount(0)
                  }
                }}
                className="w-full max-w-xs input input-bordered input-primary input-lg"
              />
            </div>

            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Wei Amount</span>
              </label>
              <input type="text" 
                placeholder="Wei"
                value={weiAmount}
                onChange={(e) => { 
                  if(e.target.value != ''){
                    if(e.target.value.includes('.') == true){
                      setWeiAmount(0)
                      setEtherAmount(0)
                      return;
                    }

                    let _amount = parseFloat(e.target.value)
                    let amount = ethers.utils.formatEther(_amount.toString())

                    if(e.target.value[e.target.value.length - 1] == '.'){
                      setWeiAmount(e.target.value)
                      setEtherAmount(amount)
                    }else{
                      setWeiAmount(_amount)
                      setEtherAmount(amount)
                    }

                  }else{
                    setEtherAmount(0)
                    setWeiAmount(0)
                  }
                }}
                className="w-full max-w-xs input input-bordered input-primary input-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
