import { NativeModules } from 'react-native';

type TestMyAwesomeModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { TestMyAwesomeModule } = NativeModules;

export default TestMyAwesomeModule as TestMyAwesomeModuleType;
