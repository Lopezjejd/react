import { CurrencySelect } from './components/currencySelect'
import { AmoutInput } from './components/amountInput'
import { ConversionResult } from './components/conversionResult'
import './App.css'
import { useRates } from './hooks/useRates'

function App() {
  const { 
    rates, 
    loading, 
    outputValue, 
    putInputCoin, 
    putInputValue, 
    putOutputCoin 
  } = useRates();

  // 1. Manejo del estado de carga
  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando datos...</p>
      </div>
    )
  }

  // 2. Verificación de datos
  if (!rates || Object.keys(rates).length === 0) {
    return (
      <div className="error-container">
        <p>No hay tasas de cambio disponibles</p>
      </div>
    )
  }

  // 3. Renderizado principal cuando todo está bien
  return (
<div className="app-container">
   <h1>Conversor de divisas</h1>
      
      <div className="converter-container">
     
     <div className="conversor-input">
       <CurrencySelect putCoin={putInputCoin} rates={rates} />
       <AmoutInput putInputValue={putInputValue} />
     </div>
      <div className="conversor-result">
        <CurrencySelect putCoin={putOutputCoin} rates={rates} />
        <ConversionResult outputValue={outputValue} />
        
        </div>
    </div>
</div>
  )
}

export default App
