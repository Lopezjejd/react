
type Props ={
    putCoin: (coin: string)=> void;
    rates: { [key: string]: number };

}

export function CurrencySelect({putCoin, rates}: Props) {
return(

 <div>
       <select className="coin" onChange={(e) => putCoin(e.target.value)}>//al cambiar la moneda input actualisamos estado
        {Object.keys(rates).map((coin) => (//accedemos a las claves del objeto rates y las mapeamos
            <option key={coin} value={coin}>
                {coin}
            </option>
        ))}
    </select>
 </div>
)
}