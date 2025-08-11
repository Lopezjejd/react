import { useState,useEffect } from "react";

export function useRates() {
    
const [rates, setRates] = useState<{ [key: string]: number }>({});
//tipamos el objeto dentro del estado rates
const [loading, setLoading] = useState(true);

const [inputCoin, setInputCoin] = useState<string>("USD");
const [inputValue, setInputValue] = useState<number>(1);
const [outputCoin, setOutputCoin] = useState<string>("EUR");
const [outputValue, setOutputValue] = useState<number>(0);



useEffect(() => {
    const fetchRates = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://v6.exchangerate-api.com/v6/2d004ac12650cc3a2cf99fc6/latest/${inputCoin}`); 
            const data = await response.json();
            setRates(data.conversion_rates);
        } catch (error) {
            console.error("Error fetching exchange rates:", error);
        } finally {
            setLoading(false);
        }
    }
    
    fetchRates(); // Llamada a la función
}, [inputCoin])

useEffect(()=>{ //calculamos el valor de la moneda de salida
    if (rates[outputCoin]){
        setOutputValue(inputValue * rates[outputCoin]);
    } 
}
,[outputCoin, inputValue, rates]) //si cambia la moneda de salida o de entrada cambia el valor de salida

function putInputCoin(coin: string) {//actualizamos la moneda de entrada
    setInputCoin(coin);

}
function putInputValue(value: number) { //actualizamos el valor de entrada
    setInputValue(value);
}
function putOutputCoin(coin: string) { //actualizamos la moneda de salida
    setOutputCoin(coin);
}
return{
    rates,
    loading,
    inputCoin,
    inputValue,
    outputCoin,
    outputValue,
    putInputCoin,
    putInputValue,
    putOutputCoin
}

}