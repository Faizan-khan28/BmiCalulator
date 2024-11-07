import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BmiCalculator () {
     
    let [weight, setWeight] = useState(0)
    let [height, setHeight] = useState(0)
    let [bmi, setBmi] = useState("")
    let [massage, setMassage] = useState("")

    let handleWeight = (event) => {
        setWeight(event.target.value)
    }

    let handleHeight = (event) => {
       setHeight(event.target.value);
    }

   
    let onSubmit = (event) => {
        event.preventDefault();
        if(weight == 0 || height == 0) {
           alert("please Enter The Correct value");
        }
        else {
            let bmi = (weight/(height*height)*703)
            setBmi(bmi.toFixed(1))

            if(bmi < 25) {
                setMassage("you are under weight");
            }
            else if (bmi >= 25 && bmi < 30) {
                setMassage("you are healthy")
            }
            else{
                setMassage("you are over weight")
            }
        }
    }

    let handleReload = () => {
        setWeight(0)
        setHeight(0)
        setBmi("")
        setMassage("")
    }
 

    return (
    <>

        <div className=' flex flex-col justify-center items-center h-[100vh]'>
           
            <div className=' border-[2px] border-black w-[450px] h-[450px] flex flex-col rounded-lg'>
               <h1 className=' text-center font-medium  text-[35px] pt-2'>BMI Calulator</h1>
               <form onSubmit={onSubmit}>
                <div className=' flex flex-col w-72 gap-5 mb-5 m-auto pt-4'>
                <TextField value={weight} onChange={handleWeight} label="Weight (lbs)" variant="outlined" />
                <TextField value={height} onChange={handleHeight} label="Height (in)" variant="outlined" />
                </div>

                <div className='flex flex-col gap-4 w-36 m-auto'>
                <Button type='submit' variant="contained">Calulate</Button>
                <Button onClick={handleReload}  variant="contained">Reload</Button>
                </div>

                <div className=' text-center mt-4'>
                    <h3 className=' font-medium text-[18px]'>Your BMI is : {bmi}</h3>
                    <p className=' font-medium'>{massage}</p>
                </div>

               </form>

            </div>
        </div>

    </>   
    )
}