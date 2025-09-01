import FieldForm from './components/FieldForm';
import FormProvider from './context/FormProvider';

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-light text-primary-text flex items-center justify-center px-4">
        <div className="w-full max-w-xs sx:max-w-xs space-y-4 mb-6">
          <FieldForm />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
