import React, { useState } from 'react'


function Form2() {
    const [weight, setWeight] = useState<number>(0);
    const [waterVolume, setWaterVolume] = useState<number>(0);
    
    
    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentWeight = Number(event.target.value);
        setWeight(currentWeight);
    }

    const handleSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const waterVolume = weight * 2.2 * 15;
        setWaterVolume(waterVolume);
    }

    return (
        <div>
            <h1>ควรดื่มน้ำวันละเท่าไหร่?</h1>
            <h1>{waterVolume} มล.</h1>
            <form onSubmit={handleSubmitted}>
                <input 
                    className='form-control'
                    onChange={handleWeightChange} 
                    type="number" 
                    id='weight' 
                    min={0} 
                    placeholder='น้ำหนักของคุณ (กก.)'
                />

                <input className='form-control' type="submit" value="คำนวณ" />
            </form>
            <p>*ฟอร์มแบบ onSubmit คำนวณเมื่อกดปุ่ม</p>
        </div>

    )
}

export default Form2