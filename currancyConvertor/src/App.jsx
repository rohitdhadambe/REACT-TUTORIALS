import { useState } from 'react';
import { InputBox } from './components';
import useCurrency from './hooks/useCurrency';
import './App.css';
import './index.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
    setAmount((prevAmount) => {
      setConvertedAmount(prevAmount);
      return convertedAmount;
    });
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <>

    
    <div
      className="w-full h-screen flex flex-wrap justify-center  bg-cover bg-no-repeat py-52"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}
    >
      <div className="text-white text-3xl flex justify-center"> CURRENCY CONVERTOR </div>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
