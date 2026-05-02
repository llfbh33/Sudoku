
import "./NumberPicker.css";


const NumberPicker = ({value, setValue}) => {

    return (
        <section id="picker-background">
            <div id="picker-main-outer">
                <div id="picker-main-inner">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <div 
                            className={value === num ? "picker-cell number-selected" : "picker-cell"} 
                            key={`numPicker-${num}`} 
                            onClick={() => setValue(num)}
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