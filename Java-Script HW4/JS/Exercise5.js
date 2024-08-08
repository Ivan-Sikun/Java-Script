let functionCalls = 0;

function functionCallsCalc() {
    return ++functionCalls;
}
functionCallsCalc();
functionCallsCalc();
functionCallsCalc();
functionCallsCalc();
document.write(functionCallsCalc());