import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BmiCalculator () {
    return (
        <div className=' flex justify-center items-center h-[100vh]'>
            <div className=' border-[2px] border-black w-[500px] h-[500px] flex flex-col rounded-lg'>
               <h1 className=' text-center font-medium  text-[30px] pt-2'>Bmi Calulator</h1>
               <form>
                <div className=' flex flex-col w-72 gap-5 mb-5 m-auto pt-4'>
                <TextField  label="Weight (lbs)" variant="outlined" />
                <TextField  label="Height (in)" variant="outlined" />
                </div>

                <div className='flex flex-col gap-4 w-36 m-auto'>
                <Button type='submit' variant="contained">Sumbit</Button>
                <Button type='submit' variant="contained">Reload</Button>
                </div>

                <div className=' text-center mt-3'>
                    <h3 className=' font-medium text-[18px]'>Your BMI is :</h3>
                    <p className=' font-medium'>your are under Weight</p>
                </div>
               </form>
            </div>
        </div>
    )
}