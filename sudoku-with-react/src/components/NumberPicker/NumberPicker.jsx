
import "./NumberPicker.css";


const NumberPicker = ({value, setValue, complete}) => {

    const handleValueChange = (num) => {
        if (complete[num] >= 9) return;
        setValue(num);
    }

    return (
        <section id="picker-background">
            <div id="picker-main-outer">
                <div id="picker-main-inner">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <div 
                            className={complete[num] >= 9 ? "picker-cell number-complete" : value === num ? "picker-cell number-selected" : "picker-cell"} 
                            key={`numPicker-${num}`} 
                            onClick={() => handleValueChange(num)}
                        >
                            {num}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default NumberPicker;