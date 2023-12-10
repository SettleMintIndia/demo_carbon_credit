import React, { useState } from 'react';

type Props = {
  tokenData: any;
};
export const TokenTransaction = ({ tokenData }: Props) => {
  const [token, setToken] = useState('');

  const [step, setStep] = useState(1);

  const nextPage = () => {
    if (step === 1) {
      setStep((prev) => prev + 1);
    }
  };
  const previousPage = () => {
    if (step === 2) {
      setStep((prev) => prev - 1);
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('Token Value: ', token);
  };
  return (
    <div>
      <div className="container">
        <ul className="progressbar">
          <li className={`${step >= 1 && 'active'}`}>Step 1</li>
          <li className={`${step > 1 && 'active'}`}>Step 2</li>
        </ul>

        <div>
          <img
            src="/payment.jpg"
            alt="logo payment"
            className="dummy_payment_image"
          />
        </div>
        <h4>Total Cost: {Number(token) * tokenData?.SellPrice}</h4>
        {/* Form  */}
        <div>
          {/* Step 1 */}
          {step === 1 && (
            <div className="step_1">
              <div className="form-group">
                <label className="step_input_label">
                  How many tokens to purchase?
                </label>
                <br />
                <input
                  value={token}
                  className="form-control"
                  type="number"
                  placeholder="Enter value"
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 2 */}

          {step === 2 && (
            <div className="step_2">
              <form onSubmit={onSubmit}>
                <button className="step_submit_btn" type="submit">
                  Pay Now
                </button>
              </form>
            </div>
          )}

          {/* Control the pages */}
          <div className="step_controller">
            <button onClick={previousPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
