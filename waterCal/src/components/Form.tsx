import React, { useState } from 'react'


function Form() {
    const [waterVolume, setWaterVolume] = useState<number>(0);

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentWeight = Number(event.target.value);

        // calculate   weight*2.2*30/2
        const calculatedVolume = currentWeight * 2.2 * 15;
        setWaterVolume(calculatedVolume);
        
    }

    return (
        <div>
            <h1>ควรดื่มน้ำวันละเท่าไหร่?</h1>
            <h1>{waterVolume} มล.</h1>
            <form>
                <input 
                    className='form-control'
                    onChange={handleWeightChange} 
                    type="number" 
                    id='weight' 
                    min={0} 
                    placeholder='น้ำหนักของคุณ (กก.)'
                    />
            </form>
                    <p>*ฟอร์มแบบ onChange คำนวณเมื่อค่าเปลี่ยน</p>
        </div>

    )
}

export default Form