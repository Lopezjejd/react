type Props = {
    putInputValue: (value: number) => void;
}

export function AmoutInput({putInputValue}:Props){
    return(
      <div>
          <input 
          className="amount-input"
            type="number" 
            onChange={(e) => putInputValue(Number(e.target.value))} //al cambiar el valor actualizamos el estado
            placeholder="Introduce la cantidad"
        />
      </div>
    )
}