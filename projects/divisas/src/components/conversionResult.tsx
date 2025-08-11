

export function ConversionResult({outputValue}: { outputValue: number }){
    return (
        <div>
            <p>{outputValue.toFixed(2)}</p>
        </div>
    );

} 