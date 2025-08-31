import FieldCalendarTime from './FieldCalendarTime';
import FieldPhoto from './FieldPhoto';
import FieldText from './FieldText';
import Button from './ui/Button';
import FieldSlider from './ui/FieldSlider';
import Title from './ui/Title';

function FieldForm() {
  return (
    <div>
      <Title title="Personal info" />

      <FieldText id="firstName" label="First Name" type="text" error="" />
      <FieldText id="lastName" label="Last Name" type="text" error="" />
      <FieldText
        id="email"
        label="Email Address"
        type="email"
        error="email is required"
      />
      <FieldSlider
        id="aga"
        label="Age"
        min={8}
        max={100}
        defaultValue={18}
        step={1}
      />
      <FieldPhoto id="photo" label="Photo" />
      <Title title="Your workout" />
      <FieldCalendarTime />
      <Button disabled={true} className="mt-4">
        Send Application
      </Button>
    </div>
  );
}

export default FieldForm;
