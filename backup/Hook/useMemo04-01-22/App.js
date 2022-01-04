import React from 'react'
import UseMemoNuse from './useMemo/UseMemoNuse';
import UseMemoUse from './useMemo/UseMemoUse';

const App = () => {
  return (
    <div>
      <h6>for mopare both comp check console console.log();</h6>
      <UseMemoUse/>
      <UseMemoNuse/>
    </div>
  )
}
export default App;