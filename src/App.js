import './App.css';
import { BasicTable } from './components/BasicTable';
import { Banks } from './components/banks';
import tw from "twin.macro";

const AppContainer = tw.div`
  items-center
  justify-center
  pt-6
  pb-10
  pl-1
  pr-1
`;

const Title = tw.h1`
  text-2xl
  font-semibold
`;

function App() {
  return (
    <AppContainer>
      <Title>Bank Search Application</Title>
      {/* <BasicTable /> */}
      <Banks />
    </AppContainer>
  );
}

export default App;
